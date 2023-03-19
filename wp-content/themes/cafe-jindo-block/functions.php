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
		/**
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Cafe Jindo, use a find and replace
		 * to change 'cafe-jindo' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'cafe-jindo', get_template_directory() . '/languages' );

		/**
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/**
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/**
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'cafe_jindo_setup' );

/**
 * Disable customizer button for all users
 */
add_action( 'admin_menu', function() {
    global $current_user;
    $current_user = wp_get_current_user();
    $user_name = $current_user->user_login;

    //check condition for the user means show menu for this user
    if(is_admin() &&  $user_name != 'USERNAME') {
        //We need this because the submenu's link (key from the array too) will always be generated with the current SERVER_URI in mind.
        $customizer_url = add_query_arg( 'return', urlencode( remove_query_arg( wp_removable_query_args(), wp_unslash( $_SERVER['REQUEST_URI'] ) ) ), 'customize.php' );
        remove_submenu_page( 'themes.php', $customizer_url );
    }
}, 999 );

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
}
add_action( 'wp_enqueue_scripts', 'cafe_jindo_scripts' );

function cafe_jindo_features() {
    add_theme_support('editor-styles');
    add_editor_style(array('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i',
        'https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap',
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital@1&family=Heebo:wght@300&display=swap',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap',
        'build/index.css',
        'assets/fonts/fontawesome/css/all.min.css'
    ));

}

add_action('after_setup_theme', 'cafe_jindo_features');

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

class PlaceholderBlock {
    function __construct($name) {
        $this->name = $name;
        add_action('init', [$this, 'onInit']);
    }

    function ourRenderCallback($attributes, $content) {
        ob_start();
        require get_theme_file_path("/site-blocks/{$this->name}.php");
        return ob_get_clean();
    }

    function onInit() {
        wp_register_script($this->name, get_stylesheet_directory_uri() . "/site-blocks/{$this->name}.js", array('wp-blocks', 'wp-editor'));

        register_block_type("cafeblocktheme/{$this->name}", array(
            'editor_script' => $this->name,
            'render_callback' => [$this, 'ourRenderCallback']
        ));
    }
}

class JSXBlock {
    function __construct($name, $renderCallback = null, $data = null) {
        $this->name = $name;
        $this->data = $data;
        $this->renderCallback = $renderCallback;
        add_action('init', [$this, 'onInit']);
    }

    function ourRenderCallback($attributes, $content) {
        ob_start();
        require get_theme_file_path("/site-blocks/{$this->name}.php");
        return ob_get_clean();
    }

    function onInit() {
        wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));

        if ($this->data) {
            wp_localize_script($this->name, $this->name, $this->data);
        }

        $ourArgs = array(
            'editor_script' => $this->name
        );

        if ($this->renderCallback) {
            $ourArgs['render_callback'] = [$this, 'ourRenderCallback'];
        }

        register_block_type("cafeblocktheme/{$this->name}", $ourArgs);
    }
}

new JSXBlock('header', true);
new JSXBlock('footer', true);
new JSXBlock('splashbanner', true, ['fallbackimage' => site_url('/wp-content/uploads/2021/04/cafe-jindo-seating.jpg')]);
new JSXBlock('mainbutton');
new JSXBlock('parallax', true);
new JSXBlock('mainsection', true);
new JSXBlock('articlecontainer', true);
new JSXBlock('bgsection', true, ['fallbackimage' => site_url('wp-content/uploads/2021/05/food-splash.jpg')]);
new JSXBlock('articleheader', true, ['fallbackimage' => site_url('wp-content/uploads/2021/05/menu-servings.jpg')]);
new JSXBlock('swiper', true);
new JSXBlock('slide', true);
new JSXBlock('swipernav', true);
new JSXBlock('swipernavbutton');
new JSXBlock('foodmenucontainer', true);
new JSXBlock('cafelogo', true);
new JSXBlock('cafenav', true);

function myallowedblocks($block_editor_context, $editor_context) {
    $cafeblocks = array(
        'core/image',
        'core/paragraph',
        'core/heading',
        'core/list',
        'core/list-item',
        'core/columns',
        'core/group',
        'core/row',
        'core/more',
        'core/nextpage',
        'core/separator',
        'core/spacer',
        'core/stack',
        'core/social-link',
        'core/block',
        'core/navigation',
        'core/template-part',
        'cafeblocktheme/mainbutton',
        'cafeblocktheme/articleheader',
        'cafeblocktheme/articlecontainer',
        'cafeblocktheme/swiper',
        'cafeblocktheme/slide',
        'cafeblocktheme/swipernav',
        'cafeblocktheme/swipernavbutton',
        'cafeblocktheme/foodmenucontainer',
        'cafeblocktheme/cafelogo',
        'cafeblocktheme/cafenav',
        'cafeblocktheme/header',
        'cafeblocktheme/footer',
        'cafeblocktheme/parallax',
        'cafeblocktheme/mainsection',
        'cafeblocktheme/bgsection',
        'cafeblocktheme/splashbanner',
        'wpforms/form-selector',
    );

    return $cafeblocks;
}

add_filter('allowed_block_types_all', 'myallowedblocks', 10, 2);
