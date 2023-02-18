<header id="masthead" class="site-header">
    <div class="container">
        <div class="site-branding">
            <a href="<?php echo site_url() ?>" class="custom-logo-link" rel="home" aria-current="page">
                <img src="<?php echo wp_get_attachment_image_src(668 , 'medium' )[0] ?>" class="custom-logo" alt="Café Jindo" srcset="<?php echo wp_get_attachment_image_srcset(668) ?>">
            </a>
            <?php
            if ( is_front_page() ) :
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
                <a class="btn btn-order btn-order-transparent" href="/order-online/">ORDER</a>
            </div>
        </nav><!-- #site-navigation -->
    </div>
    <div id="mobile-dropdown">
        <nav itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement"></nav>
    </div>
</header>