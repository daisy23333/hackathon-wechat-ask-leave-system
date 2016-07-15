//Custom override layer.m.js
var message = {
	loading: function(s) {
		if (s == null) {
			s = 30;
		}

		var a = layer.open({
			type: 2,
			content: '',
			shadeClose: false,
			time: s
		});
		return a;
	},
	alert: function(text, s) {
		if (s == null) {
			s = 2;
		}

		var a1 = layer.open({
			content: '<p>' + text + '</p>',
			style: 'background:#000; opacity:0.8; font-weight:bold; margin:0px; height:auto; color:#fff; border:0px solid #fff; text-align:center',
			time: s
		});
		return a1;
	},
	hideAll: function() {
		layer.closeAll();
	}
};

// var FormValidate = (function($) {
// 	return {

// 		scrollToElement: function($this, $scrollToElement, height) {
// 			$scrollToElement = (typeof $scrollToElement === 'undefined') ? $this.find(".error, .error-message") : $scrollToElement;
// 			height = height ? height : 110;

// 			if ($scrollToElement.length) {
// 				$("html,body").animate({
// 					scrollTop: $scrollToElement.eq(0).offset().top - height
// 				}, 'slow');
// 			}
// 		},

// 		checkTextRequired: function($this) {
// 			var text = $.trim($this.val());

// 			$this.removeClass('error');

// 			if (text === '') {
// 				$this.addClass('error');
// 				return false;
// 			}

// 			return true
// 		},

// 		checkCheckboxRequired: function($this) {
// 			$this.removeClass('error').parent().removeClass('error');

// 			if ($this.prop('checked') !== true) {
// 				$this.addClass('error').parent().addClass('error');
// 				return false;
// 			}

// 			return true
// 		},

// 		validateRequiredFields: function($requiredFields) {
// 			var len = $requiredFields.length,
// 				i = 0,
// 				validate = true;

// 			for (i; i < len; i++) {
// 				validate = (BWI.checkTextRequired($($requiredFields[i])) === false) ? false : validate;
// 			}

// 			return validate;
// 		}
// 	}
// }(jQuery));

(function($) {
	'use strict';

	var MESSAGE = {
		TypeOfLeaveRequired: Drupal.t('Please select Type of Leave'),
		LeaveDurationRequired: Drupal.t('Please input Leave Duration'),
		TotalDaysRequired: Drupal.t('Please input Total Days'),
		ApproverRequired: Drupal.t('Please input Approver')
	};

	$(document).ready(function() {
		$('#vocation-node-form').submit(function() {
			var $typeOfLeave = $('#edit-field-type-of-leave-und'),
				$leaveDuration = $('#edit-field-leave-duration').find('input'),
				$totalDays = $('#edit-field-total-days-und-0-value'),
				$approver = $('#edit-field-approver-und-0-target-id'),
				len = $leaveDuration.length,
				i = 0;

			if ($typeOfLeave.val() == '_none') {
				message.alert(MESSAGE.TypeOfLeaveRequired);
				return false;
			}

			for (i; i < len; i++) {
				if ($($leaveDuration[i]).val() == '') {
					message.alert(MESSAGE.LeaveDurationRequired);
					return false;
				}
			}

			if ($totalDays.val() == '') {
				message.alert(MESSAGE.TotalDaysRequired);
				return false;
			}

			if ($approver.val() == '') {
				message.alert(MESSAGE.ApproverRequired);
				return false;
			}

			return true;
		});

	});

})(jQuery);