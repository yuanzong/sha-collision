var randomString = require('random-string');
var hash = require('./hash');

var MESSAGE_LENGTH = 3;

var seed = randomString({
    length: 20,
    digit: false
});
var shortHex = hash(seed, MESSAGE_LENGTH);

var counter = 0;
var maxTries = Math.pow(16, MESSAGE_LENGTH);
var candidate = null;

console.log('text %s has sha1 digest %s', seed, shortHex);

while (counter++ < maxTries) {
    candidate = randomString({length: MESSAGE_LENGTH});

    if (shortHex === hash(candidate, MESSAGE_LENGTH)) {
        break;
    }
}

console.log('found %s after %s tries', candidate, counter);


