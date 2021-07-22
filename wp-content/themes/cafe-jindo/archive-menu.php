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
				<div id="menu-nav">
					<ul>
						<li><a href="#Hot">Hot Drinks</a></li>
						<li><a href="#Cold">Cold Drinks</a></li>
						<li><a href="#Waffles">Waffles</a></li>
						<li><a href="#Sandwiches">Sandwiches</a></li>
						<li><a href="#Salads">Soups/Salads</a></li>
						<li><a href="#Desserts">Desserts</a></li>
					</ul>
				</div>

				<div class="menu-section">
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
					<div class="menu-pic"><img class="alignnone wp-image-228 size-medium" src=<?php echo site_url("/wp-content/uploads/2021/05/coffee-menu.jpg") ?> alt="" width="300" height="300"></div>
                    <?php
                        foodMenu($hotDrinkMenu)
	                ?>
				</div>

                <div class="menu-section">
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
                    <h2><span id="Hot">Hot Drinks</span></h2>
                    <p>All cold drinks come in 16oz size.</p>
                    <div class="menu-pic"><img class="alignnone wp-image-228 size-medium" src=<?php echo site_url("/wp-content/uploads/2021/05/iced-tea.jpg") ?> alt="" width="300" height="300"></div>
                    <?php
                        foodMenu($coldDrinkMenu)
                    ?>
                </div>

                <div class="menu-section">
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
                    <div class="menu-pic"><img class="alignnone size-medium wp-image-233" src=<?php echo site_url("/wp-content/uploads/2021/05/waffle-display.jpg") ?> alt="" width="300" height="225"></div>
	                <?php
	                    foodMenu($waffleMenu)
	                ?>
                </div>

                <div class="menu-section">
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
                    <div class="menu-pic"><img class="alignnone size-medium wp-image-233" src=<?php echo site_url("/wp-content/uploads/2021/05/sandwhich-menu-scaled.jpg") ?> alt="" width="300" height="225"></div>
	                <?php
	                    foodMenu($sandwichMenu)
	                ?>
                </div>

                <div class="menu-section">
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
                    <div class="menu-pic"><img class="alignnone size-medium wp-image-238" src=<?php echo site_url("/wp-content/uploads/2021/05/amato-gelato-scaled.jpg") ?> alt="" width="300" height="300"></div>
                    <div class="menu-pic"><img class="alignnone wp-image-497 size-full" src=<?php echo site_url("/wp-content/uploads/2021/05/amato-logo-tm-e1620289234142.jpg") ?> alt="" width="100" height="43"></div>
	                <?php
	                    foodMenu($dessertMenu)
	                ?>
                </div>

                <div class="menu-section">
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
		</div><!-- .article-content -->
	</article><!-- #post-<?php the_ID(); ?> -->

</main>

<?php
get_footer();
?>