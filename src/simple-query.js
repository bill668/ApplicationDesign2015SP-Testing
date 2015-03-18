(function(exports) {
	'use strict';

	// Your task is to ditch the jQuery from here and just use pure javascript.
	// I'd recommend the Mozilla Web API Docs for Element (and google of course)
	// https://developer.mozilla.org/en-US/docs/Web/API/Element




	exports.simpleQuery = {
		addClass: function(element, className) {

			//$(element).addClass(className);
			element.classList.add(className);
		},
		removeClass: function(element, className) {
			//$(element).removeClass(className);
			element.classList.remove(className);
		},
		toggleClass: function(element, className) {
			//$(element).toggleClass(className);
			element.classList.toggle(className);
		},
		css: function() {
			// read about the arguments object in javascript, very handy....
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
			var element = arguments[0];
			switch(arguments.length) {
				case 2:
					//$(element).css(arguments[1]);
					document.element.style.color = arguments[1].color;
					break;
				case 3:
					$(element).css(arguments[1], arguments[2]);
					break;
				default:
					throw 'simpleQuery.css() called with bad arguments';
			}
		}

	};
})(this);