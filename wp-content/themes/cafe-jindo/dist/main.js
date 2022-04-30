/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 809:
/***/ (() => {

/* global wp, jQuery */
/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					clip: 'rect(1px, 1px, 1px, 1px)',
					position: 'absolute',
				} );
			} else {
				$( '.site-title, .site-description' ).css( {
					clip: 'auto',
					position: 'relative',
				} );
				$( '.site-title a, .site-description' ).css( {
					color: to,
				} );
			}
		} );
	} );
}( jQuery ) );


/***/ }),

/***/ 915:
/***/ (() => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(915);
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_customizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(809);
/* harmony import */ var _modules_customizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_customizer__WEBPACK_IMPORTED_MODULE_1__);


//Modules



//Instantiate new objects using our modules
const mobileMenu = new (_modules_navigation__WEBPACK_IMPORTED_MODULE_0___default())()
const customizer = new (_modules_customizer__WEBPACK_IMPORTED_MODULE_1___default())()
})();

/******/ })()
;