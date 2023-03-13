<div class="site-branding">
    <?php echo $content;
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
</div>