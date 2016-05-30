/**
 * Uncompressed msgpack
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var msgpack = require('msgpack-lite');

/* Methods -------------------------------------------------------------------*/

function deflate(obj) {
	return msgpack.encode(obj);
}

function inflate(obj) {
	return msgpack.decode(obj);
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	deflate: deflate,
	inflate: inflate
};