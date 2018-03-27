const confirmTemplate = item => `
	<div class="white-popup zoom-animation">
	
		<div class="white-popup-child-container">
			${ item.popupContent.title ? `<h2>${item.popupContent.title}</h2>` : '' }
			${ item.popupContent.desc ? `<p>${item.popupContent.desc}</p>` : '' }
		</div>
		
		<div class="give-appended-controls">
			<div class="give-popup-buttons-wrap">
				<button class="give-button give-button-secondary give-popup-close-button">
					${ item.popupContent.cancelBtnTitle ? item.popupContent.cancelBtnTitle : 'Cancel' }
				</button>
				<button class="give-button give-button-primary give-popup-confirm-button">
					${ item.popupContent.confirmBtnTitle ? item.popupContent.confirmBtnTitle : 'Confirm' }
				</button>
			</div>
		</div>
	</div>
`;

export default confirmTemplate;