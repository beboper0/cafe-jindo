<?php
get_header();
?>

<main id="primary" class="site-main">
	<header class="article-header">
		<h1 class="article-title">Menu</h1>
	</header><!-- .article-header -->

	<article id="article-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div class="article-content">
			<div class="container">
				<div class="food-menu-nav">
					<div class="nav-prev" role="button" aria-label="Previous slide">
                        <i class="fa-solid fa-arrow-left-long"></i>
                    </div>
                    <div class="nav-item" id="drinks">Drinks</div>
                    <div class="nav-item inactive" id="food">Food</div>
                    <div class="nav-next" role="button" aria-label="Next slide">
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
				</div>

                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide swiper-slide__active">
                            <div class="food-menu-section row">
                                <?php
                                $hotDrinkMenu = new WP_Query(array(
                                    'posts_per_page' => -1,
                                    'post_type' => 'menu',
                                    'meta_key' => 'menu_ordering',
                                    'orderby' => 'meta_value_num',
                                    'order' => 'ASC',
                                    'meta_query' => array(
                                        array(
                                            'key' => 'menu_category',
                                            'compare' => '==',
                                            'value' => 'teas',
                                        )
                                    )
                                ));
                                ?>
                                <div class="col-1">
                                    <h2><span id="Teas">Teas</span></h2>
                                </div>
                                <?php
                                foodMenuGrid($hotDrinkMenu)
                                ?>
                            </div>

                            <div class="row">
                                <div class="food-menu-section col-2">
                                    <?php
                                    $hotDrinkMenu = new WP_Query(array(
                                        'posts_per_page' => -1,
                                        'post_type' => 'menu',
                                        'meta_key' => 'menu_ordering',
                                        'orderby' => 'meta_value_num',
                                        'order' => 'ASC',
                                        'meta_query' => array(
                                            array(
                                                'key' => 'menu_category',
                                                'compare' => '==',
                                                'value' => 'hot_drinks',
                                            )
                                        )
                                    ));
                                    ?>
                                    <h2><span id="Hot">Hot Drinks</span></h2>
                                    <p>All drinks come in 12oz and 16oz sizes.</p>
                                    <p>Options: Oat milk/macadamia alternative +$1.00, Add espresso shot +$1.00, Add flavored sweetener +$0.75</p>
                                    <div class="food-menu-section__menu-pic"><?php echo wp_get_attachment_image(484, 'medium') ?></div>
                                    <?php
                                    foodMenu($hotDrinkMenu)
                                    ?>
                                </div>

                                <div class="food-menu-section col-2">
                                    <?php
                                    $coldDrinkMenu = new WP_Query(array(
                                        'posts_per_page' => -1,
                                        'post_type' => 'menu',
                                        'meta_key' => 'menu_ordering',
                                        'orderby' => 'meta_value_num',
                                        'order' => 'ASC',
                                        'meta_query' => array(
                                            array(
                                                'key' => 'menu_category',
                                                'compare' => '==',
                                                'value' => 'cold_drinks',
                                            )
                                        )
                                    ));
                                    ?>
                                    <h2><span id="Cold">Cold Drinks</span></h2>
                                    <p>All cold drinks come in 16oz size.</p>
                                    <div class="food-menu-section__menu-pic"><?php echo wp_get_attachment_image(482, 'medium') ?></div>
                                    <?php
                                    foodMenu($coldDrinkMenu)
                                    ?>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="row">
                                <div class="food-menu-section col-2">
                                    <?php
                                    $waffleMenu = new WP_Query(array(
                                        'posts_per_page' => -1,
                                        'post_type' => 'menu',
                                        'meta_key' => 'menu_ordering',
                                        'orderby' => 'meta_value_num',
                                        'order' => 'ASC',
                                        'meta_query' => array(
                                            array(
                                                'key' => 'menu_category',
                                                'compare' => '==',
                                                'value' => 'waffles',
                                            )
                                        )
                                    ));
                                    ?>
                                    <h2><span id="Waffles">Waffles</span></h2>
                                    <div class="food-menu-section__menu-pic"><?php echo wp_get_attachment_image(698, 'medium') ?></div>
                                    <?php
                                    foodMenu($waffleMenu)
                                    ?>
                                </div>

                                <div class="food-menu-section col-2">
                                    <?php
                                    $sandwichMenu = new WP_Query(array(
                                        'posts_per_page' => -1,
                                        'post_type' => 'menu',
                                        'meta_key' => 'menu_ordering',
                                        'orderby' => 'meta_value_num',
                                        'order' => 'ASC',
                                        'meta_query' => array(
                                            array(
                                                'key' => 'menu_category',
                                                'compare' => '==',
                                                'value' => 'sandwiches',
                                            )
                                        )
                                    ));
                                    ?>
                                    <h2><span id="Sandwiches">Sandwiches</span></h2>
                                    <p>Gluten free bread is available for all sandwiches.</p>
                                    <div class="food-menu-section__menu-pic"><?php echo wp_get_attachment_image(483, 'medium') ?></div>
                                    <?php
                                    foodMenu($sandwichMenu)
                                    ?>
                                </div>
                            </div>

                            <div class="row">
                                <div class="food-menu-section col-2">
                                    <?php
                                    $dessertMenu = new WP_Query(array(
                                        'posts_per_page' => -1,
                                        'post_type' => 'menu',
                                        'meta_key' => 'menu_ordering',
                                        'orderby' => 'meta_value_num',
                                        'order' => 'ASC',
                                        'meta_query' => array(
                                            array(
                                                'key' => 'menu_category',
                                                'compare' => '==',
                                                'value' => 'desserts',
                                            )
                                        )
                                    ));
                                    ?>
                                    <h2><span id="Desserts">Desserts</span></h2>
                                    <p>We serve an assortment of cookies, muffins, tarts and other baked goods with new additions featured seasonally. We also serve genuine gelato sourced from Amato here in Calgary.</p>
                                    <div class="food-menu-section__menu-pic"><?php echo wp_get_attachment_image(696, 'medium') ?></div>
                                    <div class="food-menu-section__menu-pic"><?php echo wp_get_attachment_image(697, 'medium') ?></div>
                                </div>

                                <div class="food-menu-section col-2">
                                    <?php
                                    $extraMenu = new WP_Query(array(
                                        'posts_per_page' => -1,
                                        'post_type' => 'menu',
                                        'meta_key' => 'menu_ordering',
                                        'orderby' => 'meta_value_num',
                                        'order' => 'ASC',
                                        'meta_query' => array(
                                            array(
                                                'key' => 'menu_category',
                                                'compare' => '==',
                                                'value' => 'extra',
                                            )
                                        )
                                    ));
                                    ?>
                                    <h2><span id="Salads">Extra</span></h2>
                                    <?php
                                    foodMenu($extraMenu)
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- .swiper-container -->
			</div><!-- .container -->
		</div><!-- .article-content -->
	</article><!-- #post-<?php the_ID(); ?> -->

</main>

<?php
get_footer();
?>