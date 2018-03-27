/**
 * # All popups are an instance of GiveModal class
 *
 * # The minimum syntax required to instantiate a popup
 * depending on the source are of 2 types:
 *
 * # `new GiveModal()` should be the first method and `popup()` should be the last method.
 *
 * -- 1. From an HTML entity:
 *    `new GiveModal( '#test-popup' ).popup()`
 *
 * -- 2. Dynamically generated content:
 *    `new GiveModal().customContent({ title: 'Some title', content: 'Some Content' }).popup()`
 *
 * # Set the type of popup by chaining one of the following suitable methods:
 * -- 1. success()
 * -- 2. notice()
 * -- 3. warning()
 * -- 4. error()
 *
 * # Chain the `addButton()` to add more buttons to the popup
 */

import 'jquery';
import 'magnific-popup';
import './lib/dynamicListener.js';
import basicTemplate from './template/basic';
import confrimTemplate from './template/confirm';
import './index.scss';


class GiveModel {
	constructor(obj) {
		this.config = Object.assign(
			{
				template: basicTemplate(obj),
				triggerSelector: '',
				externalPlugin: 'magnificPopup',
			},
			obj
		);

		// Set main class.
		this.config.mainClass = `${this.config.mainClass} popup-fade-slide`.trim();

		// Add support for magnific popup.
		if ('magnificPopup' === this.config.externalPlugin) {
			this.__magnificPopupConfig();
		}

		this.__setupClickEvent();
	}

	/**
	 * Handle click event if triggerSelector is set.
	 *
	 * @since 2.1.0
	 * @private
	 */
	__setupClickEvent() {
		// Bailout.
		if (!this.config.triggerSelector.length) {
			return;
		}

		const selector = this.config.triggerSelector.substr(1),
			self = this;

		if ('#' === this.config.triggerSelector[0]) {
			document.getElementById(selector).addEventListener('click', function (e) {
				e.preventDefault();

				self.render();
			});
		}
	}

	/**
	 * Setup magnific popup params
	 *
	 * Note: only for internal purpose
	 *
	 * @since 2.1.0
	 * @private
	 */
	__magnificPopupConfig() {
		this.config.items = this.config.items || {
			src: this.config.template,
			type: 'inline'
		};

		this.config.removalDelay = 300;
		this.config.fixedContentPos = true;
		this.config.fixedBgPos = true;
		this.config.alignTop = true;
		this.config.showCloseBtn = false;
		this.config.closeOnBgClick = false;
		this.config.enableEscapeKey = true;
		this.config.focus = '.give-popup-close-button';
	}

	/**
	 * Click close button event handler
	 *
	 * @since 2.1.0
	 * @private
	 */
	static __closeMagnificPopup() {
		event.preventDefault();
		$.magnificPopup.instance.close();
	}

	/**
	 * Give's Notice Popup
	 *
	 * @since 2.1.0
	 */
	render() {
		switch (this.config.externalPlugin) {
			case 'magnificPopup':
				// Open the popup.
				$.magnificPopup.open(this.config);

				break;
		}

		return this;
	}

}

class GiveErrorAlert extends GiveModel {
	constructor(obj) {
		obj.mainClass = 'give-error-popup';

		super(obj);
	}
}

class GiveWarningAlert extends GiveModel {
	constructor(obj) {
		obj.mainClass = 'give-warning-popup';

		super(obj);
	}
}

class GiveNoticeAlert extends GiveModel {
	constructor(obj) {
		obj.mainClass = 'give-notice-popup';

		super(obj);
	}
}

class GiveSuccessAlert extends GiveModel {
	constructor(obj) {
		obj.mainClass = 'give-success-popup';

		super(obj);
	}
}

class GiveConfrimModel extends GiveModel {
	constructor(obj) {
		obj.template = confrimTemplate(obj);
		obj.mainClass = 'give-confirm-popup';

		super(obj);
	}

	/**
	 * Confirm button click event hangler
	 *
	 * Note: only for internal purpose
	 *
	 * @since 2.1.0
	 * @private
	 */
	static __confirmMagnificPopup() {
		if ('function' === typeof $.magnificPopup.instance.st.successConfrim) {
			$.magnificPopup.instance.st.successConfrim();
			$.magnificPopup.close();
		}
	}
}

/**
 * Add events
 */
window.addDynamicEventListener(document.body, 'click', '.give-popup-close-button', GiveModel.__closeMagnificPopup);
window.addDynamicEventListener(document.body, 'click', '.give-popup-confirm-button', GiveConfrimModel.__confirmMagnificPopup);

export {GiveModel, GiveErrorAlert, GiveWarningAlert, GiveNoticeAlert, GiveSuccessAlert, GiveConfrimModel};
