const Crypto = require('./Crypto.js');
const SubtleCrypto = require('./SubtleCrypto.js');
const CryptoKey = require('./keys/CryptoKey.js');

const crypto = new Crypto();

module.exports = {
  crypto,
  Crypto,
  SubtleCrypto,
  CryptoKey,
};
