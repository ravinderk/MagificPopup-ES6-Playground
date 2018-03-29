import 'jquery';
import 'magnific-popup';
import './lib/dynamicListener.js';
import './index.scss';


/**
 * This abstract class is base for modal
 *
 * @since 2.1.0
 */
class GiveModal {
	constructor(obj) {
		if ( GiveModal === this.constructor ) {
			throw new Error( 'Abstract classes can\'t be instantiated.' );
		}

		this.config = Object.assign(
			{
				type: '',
				triggerSelector: '',
				externalPlugin: 'magnificPopup',
				classes: {
					rowAction: '',
				}
			},
			obj
		);

		// Set main class.
		this.config.mainClass = `${this.config.mainClass} modal-fade-slide`.trim();
	}

	/**
	 * Bootstrap
	 */
	init(){
		this.setupTemplate();
		this.popupConfig();
		this.__setupClickEvent();
	}

	/**
	 * Get template
	 *
	 * @since 2.1.0
	 */
	get_template() {
		let template = '<div class="give-hidden"></div>';

		if (this.config.type.length) {
			template = `<div class="give-modal give-modal--zoom ${ this.config.classes.rowAction ? `${this.config.classes.rowAction}`.trim() : '' }">

				<div class="give-modal__body">
					${ this.config.popupContent.title ? `<h2 class="give-modal__title">${this.config.popupContent.title}</h2>` : '' }
					${ this.config.popupContent.desc ? `<p class="give-modal__description">${this.config.popupContent.desc}</p>` : '' }
				</div>
	
				<div class="give-modal__controls">
					<button class="give-button give-button--secondary give-popup-close-button">
						${ this.config.popupContent.cancelBtnTitle ? this.config.popupContent.cancelBtnTitle : ( 'confirm' === this.config.type ? 'Cancel' : 'Close' ) }
					</button>
					${ ( 'confirm' !== this.config.type ) ? '' :  `<button class="give-button give-button--primary give-popup-confirm-button">
						${ this.config.popupContent.confirmBtnTitle ? this.config.popupContent.confirmBtnTitle : 'Confirm' }
					</button>`}
				</div>
				
			</div>`;
		}

		return template;
	}


	/**
	 * Setup template
	 *
	 * @since 2.1.0
	 */
	setupTemplate() {
		this.config.template = this.get_template();
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
	 * Setup popup params
	 *
	 * Note: only for internal purpose
	 *
	 * @since 2.1.0
	 * @private
	 */
	popupConfig() {
		if ('magnificPopup' === this.config.externalPlugin) {
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
	}

	/**
	 * Click close button event handler
	 *
	 * @since 2.1.0
	 * @private
	 */
	static __closePopup(event) {
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
				$.magnificPopup.open(this.config);

				break;
		}

		return this;
	}

}

/**
 * This class will handle error alert modal
 *
 * @since 2.1.0
 */
class GiveErrorAlert extends GiveModal {
	constructor(obj) {
		obj.type = 'alert';
		super(obj);
		this.config.classes.rowAction = 'give-modal--error';

		this.init();
	}
}


/**
 * This class will handle warning alert modal
 *
 * @since 2.1.0
 */
class GiveWarningAlert extends GiveModal {
	constructor(obj) {
		obj.type = 'alert';
		super(obj);
		this.config.classes.rowAction = 'give-modal--warning';

		this.init();

	}
}

/**
 * This class will handle notice alert modal
 *
 * @since 2.1.0
 */
class GiveNoticeAlert extends GiveModal {
	constructor(obj) {
		obj.type = 'alert';
		super(obj);
		this.config.classes.rowAction = 'give-modal--notice';

		this.init();
	}
}

/**
 * This class will handle success alert modal
 *
 * @since 2.1.0
 */
class GiveSuccessAlert extends GiveModal {
	constructor(obj) {
		obj.type = 'alert';
		super(obj);
		this.config.classes.rowAction = 'give-modal--success';

		this.init();
	}
}

/**
 * This class will handle confirm modal
 *
 * @since 2.1.0
 */
class GiveConfirmModal extends GiveModal {
	constructor(obj) {
		obj.type = 'confirm';
		super(obj);

		this.init();
	}

	/**
	 * Confirm button click event handler
	 *
	 * Note: only for internal purpose
	 *
	 * @since 2.1.0
	 * @private
	 */
	static __confirmPopup() {
		if ('function' === typeof $.magnificPopup.instance.st.successConfrim) {
			$.magnificPopup.instance.st.successConfrim();
			$.magnificPopup.close();
		}
	}
}

/**
 * Add events
 */
window.addDynamicEventListener(document.body, 'click', '.give-popup-close-button', GiveModal.__closePopup);
window.addDynamicEventListener(document.body, 'click', '.give-popup-confirm-button', GiveConfirmModal.__confirmPopup);

export {GiveModal, GiveErrorAlert, GiveWarningAlert, GiveNoticeAlert, GiveSuccessAlert, GiveConfirmModal};
