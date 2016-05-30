/**
 * msgpack + zlib
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var msgpack = require('msgpack-lite');
var lz4 = require('lz4');

/* Methods -------------------------------------------------------------------*/

function deflate(obj) {
	return lz4.encode(msgpack.encode(obj));
}

function inflate(obj) {
	return msgpack.decode(lz4.decode(obj));
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	deflate: deflate,
	inflate: inflate
};