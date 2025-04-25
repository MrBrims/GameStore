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
