const confirmTemplate = item => `
	<div class="give-modal give-modal--zoom">

		<div class="give-modal__body">
			${ item.popupContent.title ? `<h2>${item.popupContent.title}</h2>` : '' }
			${ item.popupContent.desc ? `<p>${item.popupContent.desc}</p>` : '' }
		</div>

		<div class="give-modal__controls">
			<div class="give-popup-buttons-wrap">
				<button class="give-button give-button--secondary give-popup-close-button">
					${ item.popupContent.cancelBtnTitle ? item.popupContent.cancelBtnTitle : 'Cancel' }
				</button>
				<button class="give-button give-button--primary give-popup-confirm-button">
					${ item.popupContent.confirmBtnTitle ? item.popupContent.confirmBtnTitle : 'Confirm' }
				</button>
			</div>
		</div>
	</div>
`;

export default confirmTemplate;