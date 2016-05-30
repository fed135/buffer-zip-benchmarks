/**
 * msgpack + zlib
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var msgpack = require('msgpack-lite');
var zlib = require('zlib');

/* Methods -------------------------------------------------------------------*/

function deflate(obj) {
	return zlib.deflateRawSync(msgpack.encode(obj));
}

function inflate(obj) {
	return msgpack.decode(zlib.inflateRawSync(obj));
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	deflate: deflate,
	inflate: inflate
};