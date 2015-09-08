var randomString = require('random-string');
var hash = require('./hash');

var MESSAGE_LENGTH = 5;

var counter = 0;
var maxTries = Math.pow(16, MESSAGE_LENGTH);

var text = '';
var hex = '';

var keys = {};
var hexToKeys = {};

while (counter++ < maxTries) {
    text = randomString({
        length: MESSAGE_LENGTH
    });
    
    if (text in keys) {
        continue;
    }
    
    keys[text] = true;
    
    hex = hash(text, MESSAGE_LENGTH);
    if (hex in hexToKeys) {
        break;
    }
    
    hexToKeys[hex] = text;
}

console.log(
    'found %s and %s with the same %s hash, after %s tries',
    hexToKeys[hex], text, hex, counter);
