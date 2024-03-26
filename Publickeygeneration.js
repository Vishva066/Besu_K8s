const { Buffer } = require('buffer');
const { privateToPublic } = require('ethereumjs-util');

const privateKey = '0xc9b17d1daef892fc978e4fba821d27df650f457210cf4a3884d27f79bfbad744';

// Remove '0x' prefix if present
const cleanedPrivateKey = privateKey.replace(/^0x/, '');

// Convert the private key to a Buffer
const privateKeyBuffer = Buffer.from(cleanedPrivateKey, 'hex');

// Derive the public key
const publicKeyBuffer = privateToPublic(privateKeyBuffer);

// Convert the public key to a hex string
const publicKeyHex = publicKeyBuffer.toString('hex');

console.log(publicKeyBuffer);

console.log('Derived Public Key:', '0x' + publicKeyHex);
