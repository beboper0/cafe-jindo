<?php
/**
 * Cafe Jindo functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Cafe_Jindo
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'cafe_jindo_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function cafe_jindo_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Cafe Jindo, use a find and replace
		 * to change 'cafe-jindo' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'cafe-jindo', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'cafe-jindo' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'cafe_jindo_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'cafe_jindo_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function cafe_jindo_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'cafe_jindo_content_width', 640 );
}
add_action( 'after_setup_theme', 'cafe_jindo_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function cafe_jindo_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'cafe-jindo' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'cafe-jindo' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'cafe_jindo_widgets_init' );

/**
 * Sets up a food menu using Custom Queries
 * @param $query
 */
function foodMenu($query) {
	while($query->have_posts()) {
    $query->the_post(); ?>
		<div class="food-menu-section__menu-desc">
			<h3>
				<?php echo get_field('menu_name')?> | <?php echo get_field('menu_price_1');
				if (get_field('menu_price_2')) {
					echo ' | ' . get_field('menu_price_2');
				} ?>
			</h3>
			<?php
			if (get_field('menu_description')) { ?>
				<p><?php echo get_field('menu_description')?></p>
			<?php }
			?>
		</div>
	<?php }
}

function foodMenuGrid($query) {
    while($query->have_posts()) {
        $query->the_post(); ?>
        <div class="col-3">
            <div class="food-menu-section__menu-desc">
                <h3>
                    <?php echo get_field('menu_name')?> | <?php echo get_field('menu_price_1');
                    if (get_field('menu_price_2')) {
                        echo ' | ' . get_field('menu_price_2');
                    } ?>
                </h3>
                <?php
                if (get_field('menu_description')) { ?>
                    <p><?php echo get_field('menu_description')?></p>
                <?php }
                ?>
            </div>
        </div>
    <?php }
}

/**
 * Get an attachment ID given a URL.
 * Credit: https://wpscholar.com/blog/get-attachment-id-from-wp-image-url/
 *
 * @param string $url
 *
 * @return int Attachment ID on success, 0 on failure
 */
function get_attachment_id( $url ) {

    $attachment_id = 0;

    $dir = wp_upload_dir();

    if ( false !== strpos( $url, $dir['baseurl'] . '/' ) ) { // Is URL in uploads directory?
        $file = basename( $url );

        $query_args = array(
            'post_type'   => 'attachment',
            'post_status' => 'inherit',
            'fields'      => 'ids',
            'meta_query'  => array(
                array(
                    'value'   => $file,
                    'compare' => 'LIKE',
                    'key'     => '_wp_attachment_metadata',
                ),
            )
        );

        $query = new WP_Query( $query_args );

        if ( $query->have_posts() ) {

            foreach ( $query->posts as $post_id ) {

                $meta = wp_get_attachment_metadata( $post_id );

                $original_file       = basename( $meta['file'] );
                $cropped_image_files = wp_list_pluck( $meta['sizes'], 'file' );

                if ( $original_file === $file || in_array( $file, $cropped_image_files ) ) {
                    $attachment_id = $post_id;
                    break;
                }

            }

        }

    }

    return $attachment_id;
}


/**
 * Enqueue scripts and styles.
 */
function cafe_jindo_scripts() {
	wp_enqueue_style( 'cafe-jindo-style', get_theme_file_uri('//build/index.css'));
    wp_enqueue_style('roboto-font', '//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100&display=swap');
    wp_enqueue_style('pinyon-font', '//fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
    wp_enqueue_style('heebo', 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital@1&family=Heebo:wght@300&display=swap');
    wp_enqueue_style('montserrat' , 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
    wp_enqueue_style('font-awesome', get_theme_file_uri('//assets/fonts/fontawesome/css/all.min.css'));

    wp_style_add_data( 'cafe-jindo-style', 'rtl', 'replace' );

	wp_enqueue_script( 'cafe-jindo-js', get_theme_file_uri('/build/index.js'), array('jquery'), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'cafe_jindo_scripts' );

/**
function new_cpt_archive_title($title){

    if ( is_post_type_archive('shop') ){
        $title = 'Shop - Café Jindo';
        return $title;
    }

    return $title;
}

add_filter( 'pre_get_document_title', 'new_cpt_archive_title', 9999 );
*/

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}
