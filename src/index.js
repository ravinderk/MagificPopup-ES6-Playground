import {
	GiveErrorAlert,
	GiveWarningAlert,
	GiveNoticeAlert,
	GiveSuccessAlert,
	GiveConfirmModal
} from './GiveModal';
import './index.scss';

/**
 * Error Alert
 */
new GiveErrorAlert({
	triggerSelector: '#errorAlert',
	popupContent: {
		title: 'Ravinder',
		desc: 'this is working fine'
	}
});


/**
 * Warning Alert
 */
new GiveWarningAlert({
	triggerSelector: '#warningAlert',
	popupContent: {
		title: 'Ravinder',
		desc: 'this is working fine'
	}
});

/**
 *
 * Success Alert
 */
new GiveSuccessAlert({
	triggerSelector: '#successAlert',
	popupContent: {
		title: 'Ravinder',
		desc: 'this is working fine'
	}
});

/**
 *
 * Notice Alert
 */
new GiveNoticeAlert({
	triggerSelector: '#noticeAlert',
	popupContent: {
		title: 'Ravinder',
		desc: 'this is working fine'
	},
	callbacks:{
		open:function(){
			console.log('opened');
		},
		close: function(){
			console.log('closed');
		}
	}
});

/**
 *
 * Confirm Model
 */
const confirmModel = new GiveConfirmModal({
	triggerSelector: '#confirmModal',
	popupContent: {
		title: 'Why?',
		desc: 'Do you want to test confirm model',
		confirmBtnTitle: 'Apply'
	},
	successConfrim: function () {
		console.log('working fine');
	}
});

confirmModel.render();

