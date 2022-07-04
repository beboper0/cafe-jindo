<?php
get_header();
?>

<main id="primary" class="site-main">
    <header class="article-header">
        <h1 class="article-title">Shop</h1>
    </header><!-- .article-header -->

    <article id="article-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="article-content">
            <div class="container">
                <div class="shop-container">
                    <?php
                    $shopItems = new WP_Query(array(
                        'posts_per_page' => -1,
                        'post_type' => 'shop',
                        'meta_key' => 'item_ordering',
                        'orderby' => 'meta_value_num',
                        'order' => 'ASC',
                    ));
                    ?>
                    <div class="row row--gutters">
                        <?php
                        if ($shopItems->have_posts()) {
                            while($shopItems->have_posts()) {
                                $shopItems->the_post() ?>
                                <div class="col-3">
                                    <?php echo wp_get_attachment_image(get_field('item_image'), 'medium'); ?>
                                    <div class="product-group">
                                        <h3><?php echo the_title() ?></h3>
                                        <p><?php echo get_field('item_description') ?></p>
                                        <span class="product-price">$<?php echo get_field('item_price') ?></span>
                                    </div>
                                </div>
                            <?php }
                        } else { ?>
                            <h1>No posts</h1>
                        <?php }
                        ?>
                    </div>
                </div>
            </div>
        </div><!-- .article-content -->
    </article><!-- #post-<?php the_ID(); ?> -->

</main>

<?php
get_footer();
?>



