var bunyan = require('bunyan');

function createDefaultLogger() {
  return require('bunyan').createLogger({name: 'elasticsearch-bunyan-logger'});
}

module.exports = function(bunyanInstance) {
  var logger = bunyanInstance || createDefaultLogger();

  return function() {
    this.error = logger.error.bind(logger);
    this.warning = logger.warn.bind(logger);
    this.info = logger.info.bind(logger);
    this.debug = logger.debug.bind(logger);
    this.trace = function (method, requestUrl, body, responseBody, responseStatus) {
      logger.trace({
        method: method,
        requestUrl: requestUrl,
        body: body,
        responseBody: responseBody,
        responseStatus: responseStatus
      });
    }
    this.close = function() { /* bunyan's loggers do not need to be closed */ };
  }
}
