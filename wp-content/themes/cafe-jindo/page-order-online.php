<?php
get_header();
?>

<main id="primary" class="site-main">
    <header class="article-header">
        <h1 class="article-title"><?php the_title() ?></h1>
    </header><!-- .article-header -->

    <article id="article-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="article-content">
            <div class="container">
                <div>
                    <h3>!Order online using Doordash or UberEats for delivery straight to your home! Or call us at (587) 353-4728 to pick up your order at our location!</h3>
                </div>
                <div style="display: flex; justify-content: center">
                    <div>
                        <a class="btn" href="https://www.doordash.com/en-CA/store/cafe-jindo-calgary-1524278" target="_blank" rel="noopener">DOORDASH</a>
                        <a class="btn" href="https://www.ubereats.com/ca/calgary/food-delivery/cafe-jindo/SNpdKXZIThuRD5FQ9-dGmQ" target="_blank" rel="noopener">UBEREATS</a>
                    </div>
                </div>
                <div style="display: flex; justify-content: center">
                    <div>
                        <?php echo wp_get_attachment_image(411, 'medium'); ?>
                        <?php echo wp_get_attachment_image(410, 'medium'); ?>
                    </div>
                </div>
            </div>
        </div><!-- .article-content -->
    </article><!-- #post-<?php the_ID(); ?> -->

</main>

<?php
get_footer();
?>



