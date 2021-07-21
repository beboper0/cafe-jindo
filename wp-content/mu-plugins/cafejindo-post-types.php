<?php

function cafe_post_types() {
//Menu Post Type
	register_post_type('menu', array(
		'show_in_rest' => true,
		'capability_type' => 'menu',
		'map_meta_cap' => true,
		'supports' => array('title'),
		'rewrite' => array('slug' => 'menus'),
		'public' => true,
		'has_archive' => true,
		'labels' => array(
			'name' => 'Menu',
			'add_new_item' => 'Add New Menu Item',
			'edit_item' => 'Edit Menu Item',
			'all_items' => 'All Menu Items',
			'singular_name' => 'Menu Item'
		),
		'menu_icon' => 'dashicons-media-spreadsheet'
	));
}

add_action('init', 'cafe_post_types');

?>