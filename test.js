var assert = require('assert');
var sinon = require('sinon');
var bunyanLogger = require('./index.js');


var BunyanSpy = function() {
  this.error = sinon.spy();
  this.warn = sinon.spy();
  this.info = sinon.spy();
  this.debug = sinon.spy();
  this.trace = sinon.spy();
}


describe("elasticsearch-bunyan-logger", function() {
  beforeEach(function() {
    var bunyan = new BunyanSpy();

    var LoggingAdapter = bunyanLogger(bunyan);
    this.loggerInstance = new LoggingAdapter();
    this.bunyan = bunyan;

  })

  it("should log errors", function() {
    this.loggerInstance.error('test error');

    assert(this.bunyan.error.called);
    assert(this.bunyan.error.calledWith('test error'));
  })

  it("should log warnings", function() {
    this.loggerInstance.warning('test warning');

    assert(this.bunyan.warn.called);
    assert(this.bunyan.warn.calledWith('test warning'));
  })

  it("should log info", function() {
    this.loggerInstance.info('test info');

    assert(this.bunyan.info.called);
    assert(this.bunyan.info.calledWith('test info'));
  })

  it("should log debug", function() {
    this.loggerInstance.debug('test debug');

    assert(this.bunyan.debug.called);
    assert(this.bunyan.debug.calledWith('test debug'));
  })

  it("should log trace", function() {
    this.loggerInstance.trace('method', 'url', 'body', 'responseBody', 'responseStatus');

    assert(this.bunyan.trace.called);
    assert(this.bunyan.trace.calledWith({
      method: 'method',
      requestUrl: 'url',
      body: 'body',
      responseBody: 'responseBody',
      responseStatus: 'responseStatus'
    }));
  })

  it("should have close() method implemented", function() {
    // no asserts, if method is not implemented an error will be thrown
    this.loggerInstance.close();
  })
});
