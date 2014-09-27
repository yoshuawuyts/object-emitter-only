/**
 * Module dependencies
 */

var proxy = require('event-accessor');
var apply = require('object-apply');
var assert = require('assert');

/**
 * Apply an event proxy to all values in an object.
 *
 * @param {Object} obj
 * @api public
 */

module.exports = function(obj) {
  assert('object' == typeof obj, 'Object should be an object');

  return apply(obj, proxy);
};
