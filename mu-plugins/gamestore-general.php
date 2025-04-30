<?php

/**
 * Plugin Name: Gamestore General
 * Description: A general plugin for the Gamestore theme.
 * Version: 1.0.0
 * Author: AlexDev
 * Author URI: https://github.com/MrBrims
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

function gamestore_remove_dashboard_widgets()
{
	global $wp_meta_boxes;
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_right_now']);
}
add_action('wp_dashboard_setup', 'gamestore_remove_dashboard_widgets');

// Allow SVG uploads
function gamestore_mime_types($mimes)
{
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'gamestore_mime_types');

# Fix MIME type for SVG files
function fix_svg_mime_type($data, $file, $filename, $mimes, $real_mime = '')
{

	// WP 5.1 +
	if (version_compare($GLOBALS['wp_version'], '5.1.0', '>=')) {
		$dosvg = in_array($real_mime, ['image/svg', 'image/svg+xml']);
	} else {
		$dosvg = ('.svg' === strtolower(substr($filename, -4)));
	}

	// mime type was zeroed out, we'll fix it
	// and we'll also check the user's authorization
	if ($dosvg) {

		// let's authorize
		if (current_user_can('manage_options')) {

			$data['ext']  = 'svg';
			$data['type'] = 'image/svg+xml';
		}
		// ban
		else {
			$data['ext']  = false;
			$data['type'] = false;
		}
	}

	return $data;
}
add_filter('wp_check_filetype_and_ext', 'fix_svg_mime_type', 10, 5);

// Fix SVG display in media library
function gamestore_fix_svg()
{
	echo '<style>
      .attachment-266x266, .thumbnail img {
          width: 100% !important;
          height: auto !important;
      }
  </style>';
}
add_action('admin_head', 'gamestore_fix_svg');
