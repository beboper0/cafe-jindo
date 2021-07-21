<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Cafe_Jindo
 */

?>

<main id="primary" class="site-main">
	<header class="article-header">
		<?php the_title( '<h1 class="article-title">', '</h1>' ); ?>
	</header><!-- .article-header -->

		<article id="article-<?php the_ID(); ?>" <?php post_class(); ?>>

			<?php cafe_jindo_post_thumbnail(); ?>

			<div class="article-content">
					<?php
					the_content();

					wp_link_pages(
						array(
							'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cafe-jindo' ),
							'after'  => '</div>',
						)
					);
					?>
			</div><!-- .article-content -->

		</article><!-- #post-<?php the_ID(); ?> -->

</main><!-- #main -->
