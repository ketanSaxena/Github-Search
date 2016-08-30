import CONSTANTS from '../constants/app-constant';

var UI = {
  getBodyClassName: (isLoggedIn) => isLoggedIn ? '' : 'blackTheme paddingBottom174',

  setBodyClassName: (addClassName) => $('body').attr('class', addClassName),

  removeBodyClassName: () => $('body').attr('class', ''),

  getElement: function(refValue) {
   return this && this.refs && this.refs[refValue];
  },

  toggleActiveListItem: (target) => {
    target = $(target);
    target.closest('ul').find('.active').removeClass('active');
    target.addClass('active');
  },

  validateForm: (formObject) => {
    if (!formObject.jquery) {
      formObject = $(formObject);
    }
    var requiredElements = formObject.find('.mandatory');
    requiredElements.on('input change focusout click', function(event) {
      var allValid = true;
      requiredElements.each(function () {
        var element = $(this);
        if (element.hasClass('customSelectList')) {
          allValid = allValid && element[0].dataset && element[0].dataset.selectedItem;
        } else {
          allValid = allValid && element.val();
        }
      });
      var submit = formObject.find(':submit');

      submit.prop('disabled', !allValid);
      submit[allValid ? 'removeClass' : 'addClass']('disableLinkBtn');
    });
  },

  requiredElementsFilled: (formObject) => {
    if (!formObject.jquery) {
      formObject = $(formObject);
    }
    var requiredElements = formObject.find('.mandatory');
    var allValid = true;
    requiredElements.each(function () {
      var element = $(this);
      if (element.hasClass('customSelectList')) {
        allValid = allValid && element[0].dataset && element[0].dataset.selectedItem;
      } else {
        allValid = allValid && element.val();
      }
    });
    return allValid;
  },

  notify: (type, message, customTime) => {
    var alertBox = $('.customAlertMsg');
    var alert = CONSTANTS.ALERT;
    var className = alert.typeClass[type] || alert.typeClass.info;
    alertBox.find('.message').prop('textContent', message);
    alertBox.addClass(className);
    alertBox.css('display', 'block');
    setTimeout(() => {
      alertBox.css('display', 'none');
      alertBox.removeClass(className);
    }, customTime || alert.displayTime);
  },

  toggleLoader: () => $('.loaderOverlay').toggle(),

  classSet: (classObject) => {
    return _.isObject(classObject) &&
    _.chain(classObject).map(function(flag, className) {
      return flag && className ? className : '';
    }).compact().join(' ').value() || '';
  },

  showNumber: (number) => {
    return _.isNumber(parseInt(number))   && !_.isNaN(parseInt(number)) ? number : CONSTANTS.NOT_AVAILABLE;
  }
};

export default UI;
