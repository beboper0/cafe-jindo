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
                <div class="container">
                    <div class="row">
                        <h3>Order online using Doordash or UberEats for delivery straight to your home! Or call us at (587) 353-4728 to pick up your order at our location!</h3>
                    </div>
                    <div class="row">
                        <a class="btn" href="https://www.doordash.com/en-CA/store/cafe-jindo-calgary-1524278" target="_blank" rel="noopener">DOORDASH</a>
                        <a class="btn" href="https://www.ubereats.com/ca/calgary/food-delivery/cafe-jindo/SNpdKXZIThuRD5FQ9-dGmQ" target="_blank" rel="noopener">UBEREATS</a></div>
                    <div class="row">
                        <img class="alignnone size-medium wp-image-408" style="padding:1rem;" src="<?php echo site_url('/wp-content/uploads/2021/04/pastries-display-300x199.jpg"') ?>>
                        <img class="alignnone size-medium wp-image-410" style="padding:1rem;" src="<?php echo site_url('/wp-content/uploads/2021/04/tea-displays-300x199.jpg"') ?>>
                    </div>
                </div>
            </div>
        </div><!-- .article-content -->
    </article><!-- #post-<?php the_ID(); ?> -->

</main>

<?php
get_footer();
?>



