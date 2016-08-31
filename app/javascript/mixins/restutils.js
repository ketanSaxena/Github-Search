var http = (function () {

  var _defaultHandler = (error) => UI.notify('error', error)

  return {
    requestType: {
      get: 'GET',
      post: 'POST',
      put: 'PUT'
    },

    makeRequest: (url, queryParams, type) => {
      return new Promise(function resolver(resolve, reject) {
        var params = {
          type: type || 'GET',
          data: queryParams || {},
          url: url,
          async: true,
          crossDomain: true,
          success: (result) => resolve(result),
          error: (err) => reject ? reject(err) : _defaultHandler(err)
        }
        if(type==='POST') {
          params.dataType = 'json'
        }
        $.ajax(params);
      });
    }
  };
})();

export default http;
