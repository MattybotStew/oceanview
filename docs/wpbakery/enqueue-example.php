<?php
/**
 * Oceanview design system — enqueue example for a WordPress child theme.
 *
 * Setup
 * 1. Copy oceanview-wpbakery.css into the child theme root (or assets/css/ —
 *    then update the paths below). The Design QA parity block is appended to
 *    the end of that same sheet, so there is no second stylesheet to enqueue.
 * 2. Copy brand fonts into the theme and fix @font-face paths in the CSS.
 * 3. Paste the hooks below into the child theme functions.php
 *    (or require this file from functions.php).
 *
 * Do not drop this file into a plugin directory unchanged without adjusting paths.
 */

defined( 'ABSPATH' ) || exit;

/* =====================================================================
 * G1 — MARKET TICKER SWITCH
 * ---------------------------------------------------------------------
 * The market ticker is KEPT. The React prototype dropped it from the shell
 * on 2026-09-09, but the ticker is part of the approved WordPress design:
 * a 32px market-data strip above the 72px nav bar, which collapses away
 * once the page is scrolled past 10px. WordPress therefore diverges from
 * the prototype here — the nav bar itself is still 72px.
 *
 * The ACF option (options_enable_stock_ticker) is the switch, so the ticker
 * can be turned off from WP Admin without a code change. The filter exists
 * so a file-only promote to staging/production can pin the state without
 * needing a database push; by default it passes the ACF value straight
 * through.
 *
 * header.php gates the ticker markup on oceanview_ticker_enabled(), so a
 * disabled ticker is never rendered rather than being hidden with CSS.
 * ===================================================================== */
function oceanview_ticker_enabled() {
	$enabled = (bool) get_field( 'enable_stock_ticker', 'options' );
	return (bool) apply_filters( 'oceanview_ticker_enabled', $enabled );
}

/* =====================================================================
 * G9 — NEWSLETTER SIGNUP ROW FIELD SET
 * ---------------------------------------------------------------------
 * The prototype's newsletter/footer signup row is [Name][Email][Sign Up]:
 * two wide fields and a button on a single row, consent underneath.
 * Gravity Forms #21 ("Join Our Email List") asks for First Name / Last
 * Name / Email, so the row rendered three narrow thirds instead.
 *
 * The form is trimmed at render time rather than in the database, so the
 * change travels with the theme on the file-only sFTP promote to staging
 * and production (a database edit would not).
 *
 * Gravity Forms treats a hidden field as non-validatable
 * (GFFormDisplay::is_field_validation_supported() returns false for
 * visibility === 'hidden'), so the field drops out of the front end and out
 * of validation together. The field is still collected if anything posts
 * it, and restoring the last name is a one-line change here.
 * ===================================================================== */
function oceanview_gf_signup_fields( $form ) {
	if ( empty( $form['id'] ) || 21 !== (int) $form['id'] ) {
		return $form;
	}
	foreach ( $form['fields'] as $key => $field ) {
		$label = is_object( $field ) ? ( isset( $field->label ) ? $field->label : '' ) : ( isset( $field['label'] ) ? $field['label'] : '' );
		$type  = is_object( $field ) ? ( isset( $field->type ) ? $field->type : '' ) : ( isset( $field['type'] ) ? $field['type'] : '' );
		if ( 'text' !== $type || false === stripos( $label, 'last name' ) ) {
			continue;
		}
		if ( is_object( $field ) ) {
			$form['fields'][ $key ]->visibility = 'hidden';
		} else {
			$form['fields'][ $key ]['visibility'] = 'hidden';
		}
	}
	return $form;
}
add_filter( 'gform_pre_render', 'oceanview_gf_signup_fields' );
add_filter( 'gform_pre_validation', 'oceanview_gf_signup_fields' );
add_filter( 'gform_pre_submission_filter', 'oceanview_gf_signup_fields' );

/**
 * Enqueue Oceanview design-system CSS on the front end.
 */
add_action( 'wp_enqueue_scripts', function () {
	if ( is_admin() ) {
		return;
	}

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

	// G1 — the default header height (32px ticker + 72px nav bar) is declared
	// as `--ov-header-h` in the Design QA block at the end of the sheet, and
	// header.php's syncContentOffset() keeps it current as the ticker
	// collapses on scroll (104px → 73px). No inline style needed.

	// Progressive-enhancement JS for the Applications explorer (static markup + filters).
	$js_rel  = '/ov-applications-filter.js';
	$js_path = get_stylesheet_directory() . $js_rel;
	if ( file_exists( $js_path ) ) {
		wp_enqueue_script(
			'oceanview-apps-filter',
			get_stylesheet_directory_uri() . $js_rel,
			[],
			(string) filemtime( $js_path ),
			true
		);
	}
}, 20 );

/**
 * Add body class so base .ov-ds type rules apply sitewide.
 */
add_filter( 'body_class', function ( $classes ) {
	$classes[] = 'ov-ds';
	return $classes;
} );
