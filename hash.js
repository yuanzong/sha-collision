var crypto = require('crypto');
var util = require('util');

module.exports = function (text, length) {
  var shasum = crypto.createHash('sha1');
  shasum.update(text);
  return shasum.digest('hex').slice(0, length);
}