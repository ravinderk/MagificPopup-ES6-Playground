const basicTemplate = item => `
	<div class="give-modal zoom-animation">

		<div class="give-modal__body">
			${ item.popupContent.title ? `<h2 class="give-modal__title">${item.popupContent.title}</h2>` : '' }
			${ item.popupContent.desc ? `<p class="give-modal__description">${item.popupContent.desc}</p>` : '' }
		</div>

		<div class="give-modal__controls">
			<button class="give-button give-button-secondary give-popup-close-button">
				${ item.popupContent.closeBtnTitle ? item.popupContent.closeBtnTitle : 'Close' }
			</button>
		</div>
	</div>
`;

export default basicTemplate;