<?php

/**
 * Plugin Name:       Blocks Gamestore
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            AlexDev
 * Author URI:       	https://github.com/MrBrims
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-gamestore
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

add_filter('block_categories_all', function ($categories) {
	return array_merge([
		[
			'slug' => 'gamestore',
			'title' => __('GameStore', 'blocks-gamestore'),
			'icon'  => 'admin-home',
		]
	], $categories);
});

function create_block_blocks_gamestore_block_init()
{

	if (function_exists('wp_register_block_types_from_metadata_collection')) {
		wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
		return;
	}


	if (function_exists('wp_register_block_metadata_collection')) {
		wp_register_block_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
	}

	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach (array_keys($manifest_data) as $block_type) {
		register_block_type(__DIR__ . "/build/{$block_type}");
	}
}
add_action('init', 'create_block_blocks_gamestore_block_init');
