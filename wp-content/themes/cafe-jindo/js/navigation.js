/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
var $j 		= jQuery.noConflict(),
	$window = $j( window );

$j( document ).ready( function() {
	"use strict";
	// Drop down mobile menu
	dropDownMobile();
} );

function dropDownMobile() {
	"use strict"

	if ( $j( 'body' ).hasClass( 'dropdown-mobile' ) ) {
		
		// Get all the link elements within the menu.
		var mainMenu = $j('#primary-menu').clone();
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

( function() {

	var owpHeader = document.getElementById('site-header'),
		navWarap = document.querySelectorAll( '#mobile-dropdown nav' )[0];
	if ( ! owpHeader || ! navWarap ) {
		return;
	}

	document.addEventListener( 'keydown', function( event ) {

		var selectors = 'input, a, button',
			elements  = navWarap.querySelectorAll( selectors ),
			closMenu  = document.querySelector( '.mobile-menu.opened' ),
			lastEl    = elements[ elements.length - 1 ],
			firstEl   = elements[0],
			activeEl  = document.activeElement,
			tabKey    = event.keyCode === 9,
			shiftKey  = event.shiftKey;


		if ( ! shiftKey && tabKey && lastEl ===  activeEl ) {
			event.preventDefault();
			closMenu.focus();
		}

		if ( shiftKey && tabKey && firstEl === activeEl ) {
			event.preventDefault();
			closMenu.focus();
		}

		if ( shiftKey && tabKey && closMenu === activeEl ) {
			event.preventDefault();
			lastEl.focus();
		}

	});

}() );
