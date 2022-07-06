<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Cafe_Jindo
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="preconnect" href="https://fonts.gstatic.com">

    <?php wp_head(); ?>
</head>

<body <?php body_class('dropdown-mobile'); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'cafe-jindo' ); ?></a>

<header id="masthead" class="site-header">
    <div class="container">
        <div class="site-branding">
            <?php
            the_custom_logo();
            if ( is_front_page() && is_home() ) :
                ?>
                <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
            <?php
            else :
                ?>
                <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
            <?php
            endif;
            $cafe_jindo_description = get_bloginfo( 'description', 'display' );
            if ( $cafe_jindo_description || is_customize_preview() ) :
                ?>
                <p class="site-description"><?php echo $cafe_jindo_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
            <?php endif; ?>
        </div><!-- .site-branding -->

        <nav id="site-navigation" class="main-navigation">
            <div class="menu-toggle" aria-controls="menu-content" aria-expanded="false">
                <a class="mobile-menu" href="javascript:void(0)" aria-label="Mobile Menu"><i class="fa fa-bars" aria-hidden="true"></i></a>
            </div>
            <?php
            wp_nav_menu(
                array(
                    'theme_location' => 'menu-1',
                    'menu_class'        => 'menu-content',
                    'container_class' => 'main-navigation__menu-container'
                )
            );
            ?>
            <div class="main-navigation__second-menu-container">
                <a class="btn btn-order" href="/order-online/">ORDER</a>
            </div>
        </nav><!-- #site-navigation -->
    </div>
    <div id="mobile-dropdown">
        <nav itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement"></nav>
    </div>
</header><!-- #masthead -->

<div class="parallax-container">

