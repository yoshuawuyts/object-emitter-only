/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var proxy = require('./index');
var Emitter = require('events').EventEmitter;

/**
 * Test
 */

describe('', function() {
  it('should assert input types', function() {
    proxy.bind(null, 123)
      .should.throw('Object should be an object');

    proxy.bind(null, {})
      .should.not.throw('Object should be an object');
  });

  it('should proxy object values', function() {
    var impureObject = new Emitter();
    impureObject.foo = 'strip me away!';

    var nw = proxy({
      foo: new Emitter(),
      bar: impureObject
    });

    (nw.bar.foo == undefined).should.be.true;
    nw.bar.on.should.be.of.type('function');
  });
});
