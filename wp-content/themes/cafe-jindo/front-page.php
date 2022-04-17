<?php get_header(); ?>

    <main id="primary" class="site-main">

        <section>
            <div class="bg-overlay reveal-on-load"
                 style="background-image: url(<?php echo site_url('/wp-content/uploads/2021/04/cafe-jindo-seating.jpg'); ?>);">
                <div class="frontpage-container">
                    <div class="splash-container">
                        <h2>NOW OPEN FOR TAKEOUT!</h2>
                        <div><a class="btn btn-secondary btn-order" href="/order-online">ORDER NOW</a></div>
                    </div>
                </div>
            </div>
        </section>

        <?php

        $featuredItems = new WP_Query(array(
            'posts_per_page' => 3,
            'post_type' => 'featured-item',
            'meta_key' => 'ordering',
            'orderby' => 'meta_value_num',
            'order' => 'ASC',
        ));

        if ($featuredItems->have_posts()) { ?>
        <section>
            <div class="container reveal-on-scroll">
                <h2 style="text-align: center;">Featuring</h2>
                <div class="row row--gutters">
                    <?php
                    while($featuredItems->have_posts()) {
                        $featuredItems->the_post() ?>
                        <div class="col-3">
                            <div style="height: 7em"><h3><?php echo the_title() ?></h3></div>
                            <?php echo wp_get_attachment_image(get_field('featured_image'), 'large'); ?>
                            <p><?php echo the_content() ?></p>
                        </div>
                    <?php }
                    ?>
                </div>
            </div>
        </section>

        <section>
            <div class="bg-overlay parallax"
                 style="background-image: url(<?php echo site_url('/wp-content/uploads/2021/05/food-splash.jpg'); ?>);"></div>
        </section>
        <?php } ?>

        <section>
            <div class="container reveal-on-scroll">
                <div class="row">
                    <div class="col-2"><?php echo wp_get_attachment_image(387, 'large'); ?></div>
                    <div class="col-2">
                        <h2>Cafe Jindo</h2>
                        <hr>
                        <p>Café Jindo began with the idea that everyone deserves to have little luxuries in life;
                            whether it be heated seats in your car or a cup of delicious, locally roasted coffee to
                            smoothly carry you through the day.</p>
                        <p>We can’t provide the heated seats, but we do partner with other Calgary businesses to
                            create top-quality handmade drinks and eats that provide little moments of escape in
                            your day. As our business grows, we hope to create some exciting collaborations with
                            local artists, artisans, and other small businesses.</p>
                        <p>We hope to see you soon at our location!</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="bg-overlay parallax"
                 style="background-image: url(<?php echo site_url('wp-content/uploads/2021/07/DSC_1588-scaled.jpg'); ?>);"></div>
        </section>

        <section style="display: none;">
            <div class="container">
                <h2>Featured</h2>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                </div>
            </div>
        </section>

        <section>
            <div class="bg-overlay parallax" style="display: none;"></div>
        </section>

    </main><!-- #main -->

<?php
get_footer();
?>