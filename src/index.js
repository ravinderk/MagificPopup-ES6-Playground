import {
	GiveModel,
	GiveErrorAlert,
	GiveWarningAlert,
	GiveNoticeAlert,
	GiveSuccessAlert,
	GiveConfrimModel
} from './GiveModel';
import './index.scss';

/**
 * Simple Alert
 */
new GiveModel({
	triggerSelector: '#Model',
	popupContent: {
		title: 'Ravinder',
		desc: 'this is working fine'
	}
});

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
const confirmModel = new GiveConfrimModel({
	triggerSelector: '#confirmModel',
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

