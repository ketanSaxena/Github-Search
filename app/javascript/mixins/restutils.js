import CONSTANTS from '../constants/app-constant';
import Local from './sessionUtils';
import Authorization from '../services/authorization';

var http = (function () {

  var _defaultHandler = (error) => UI.notify('error', error.statusText)


  return {

    performGet: (queryParams, url) => {
      return new Promise(function resolver(resolve, reject) {
        $.ajax({
          type: 'GET',
          data: queryParams || {},
          url: url || CONSTANTS.APP.apiBaseUrl,
          async: true,
          crossDomain: true,
          success: (result) => resolve(result),
          error: (err) => reject ? reject(err) : _defaultHandler(err)
        });
      });
    },

    performPost: (body, url) => {
      return new Promise(function resolver(resolve, reject){
        $('.loaderOverlay').show();
        $.ajax({
          type: 'POST',
          data: body,
          url: url || CONSTANTS.APP.apiBaseUrl,
          async: true,
          dataType: "json",
          success: (result) => {
            resolve(result);
            $('.loaderOverlay').hide();
          },
          error: (err) => {
            $('.loaderOverlay').hide();
            reject ? reject(err) : _defaultHandler(err)
          }
        });
      });
    }
  };
})();

export default http;
