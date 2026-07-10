<?php
/**
 * Oceanview design system — enqueue example for a WordPress child theme.
 *
 * Setup
 * 1. Copy oceanview-wpbakery.css into the child theme root
 *    (or assets/css/ — then update the path below).
 * 2. Copy brand fonts into the theme and fix @font-face paths in the CSS.
 * 3. Paste the hooks below into the child theme functions.php
 *    (or require this file from functions.php).
 *
 * Do not drop this file into a plugin directory unchanged without adjusting paths.
 */

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue Oceanview design-system CSS on the front end.
 */
add_action( 'wp_enqueue_scripts', function () {
	$rel  = '/oceanview-wpbakery.css'; // change if you put CSS under assets/css/
	$path = get_stylesheet_directory() . $rel;
	$uri  = get_stylesheet_directory_uri() . $rel;
	$ver  = file_exists( $path ) ? (string) filemtime( $path ) : '1.0.0';

	wp_enqueue_style(
		'oceanview-ds',
		$uri,
		[], // add parent theme handle here if load order matters, e.g. [ 'parent-style' ]
		$ver
	);
}, 20 );

/**
 * Add body class so base .ov-ds type rules apply sitewide.
 */
add_filter( 'body_class', function ( $classes ) {
	$classes[] = 'ov-ds';
	return $classes;
} );
