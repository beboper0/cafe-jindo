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
                <h2>Why is our name Café Jindo?</h2>
                <p>The Jindo in our name refers to a Korean breed of dog that originated from the Jindo islands. These dogs are known for their exceptional faithfulness, loyalty, and active yet gentle nature.</p>
                <p>We wanted our café to be a space that emcompasses these same ideas of loyalty and faithfulness for our community. Much like curling up with your dog at home we strive to provide you with these same moments of escape and comfort. We hope to serve as a platform to uplift and showcase the amazing vitality and talent our community has to offer. </p>
            </div>
        </div><!-- .article-content -->
    </article><!-- #post-<?php the_ID(); ?> -->

</main>

<?php
get_footer();
?>



