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
				<div class="food-menu-nav">
					<ul>
						<li><a href="#Hot">Hot Drinks</a></li>
						<li><a href="#Cold">Cold Drinks</a></li>
						<li><a href="#Waffles">Waffles</a></li>
						<li><a href="#Sandwiches">Sandwiches</a></li>
						<li><a href="#Salads">Soups/Salads</a></li>
						<li><a href="#Desserts">Desserts</a></li>
					</ul>
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
                        <p>Options: Oat milk alternative +$0.50, Add espresso shot +$0.75, Add vanilla/caramel +$0.50</p>
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
                        <h2><span id="Hot">Cold Drinks</span></h2>
                        <p>All cold drinks come in 16oz size.</p>
                        <div class="food-menu-section__menu-pic"><?php echo wp_get_attachment_image(482, 'medium') ?></div>
                        <?php
                        foodMenu($coldDrinkMenu)
                        ?>
                    </div>
                </div>

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
                        <div class="food-menu-section__menu-pic"><?php echo wp_get_attachment_image(512, 'medium') ?></div>
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
                        <div class="food-menu-section__menu-pic"><?php echo wp_get_attachment_image(495, 'medium') ?></div>
                        <div class="food-menu-section__menu-pic"><?php echo wp_get_attachment_image(497, 'small') ?></div>
                        <?php
                        foodMenu($dessertMenu)
                        ?>
                    </div>

                    <div class="food-menu-section col-2">
                        <?php
                        $soupsSaladsMenu = new WP_Query(array(
                            'posts_per_page' => -1,
                            'post_type' => 'menu',
                            'meta_key' => 'menu_ordering',
                            'orderby' => 'meta_value_num',
                            'order' => 'ASC',
                            'meta_query' => array(
                                array(
                                    'key' => 'menu_category',
                                    'compare' => '==',
                                    'value' => 'soups_salads',
                                )
                            )
                        ));
                        ?>
                        <h2><span id="Salads">Soups and Salads</span></h2>
                        <?php
                        foodMenu($soupsSaladsMenu)
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