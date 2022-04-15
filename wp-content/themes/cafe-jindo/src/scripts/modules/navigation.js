import RevealOnScroll from "./RevealOnScroll";

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
var $j 		= jQuery.noConflict(),
	$window = $j( window );

function dropDownMobile() {
	"use strict"

	if ( $j( 'body' ).hasClass( 'dropdown-mobile' ) ) {
		
		// Get all the link elements within the menu.
		var mainMenu = $j('.menu-content').clone();
		$j('#mobile-dropdown nav').append($j(mainMenu));
		
		// Open drop down menu
		$j( '.mobile-menu' ).on( 'click', function() {
			$j( '#mobile-dropdown' ).slideToggle( 500 );
			$j( this ).toggleClass( 'opened' );
			$j( '.mobile-menu > .hamburger' ).toggleClass( 'is-active' );
			return false;
		} );

		// Close menu function
		var dropDownMobileClose = function( e ) {
			$j( '#mobile-dropdown' ).slideUp( 200 );
			$j( '.mobile-menu' ).removeClass( 'opened' );
			$j( '.mobile-menu > .hamburger' ).removeClass( 'is-active' );
		}

		var $owpmenu = $j( '.mobile-menu > .hamburger' );
		var isMenuOpen = false;
		$owpmenu.on('click', function () {
			isMenuOpen = !isMenuOpen;
			$owpmenu.attr('aria-expanded', isMenuOpen);
		});
			
		// Close menu
		$j( document ).on( 'click', function() {
			dropDownMobileClose();
		} ).on( 'click', '#mobile-dropdown', function( e ) {
		    e.stopPropagation();
		} );

		// Close on resize
		$window.resize( function() {
			if ( $window.width() >= 960 ) {
				dropDownMobileClose();
			}
		} );

		// Close menu if anchor link
        $j( '#mobile-dropdown li a[href*="#"]:not([href="#"])' ).on( 'click', function() {
        	dropDownMobileClose();
	    } );

	}

}

export default dropDownMobile;