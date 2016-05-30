/**
 * msgpack + snappy
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var msgpack = require('msgpack-lite');
var snappy = require('snappy');

/* Methods -------------------------------------------------------------------*/

function deflate(obj) {
	return snappy.compressSync(msgpack.encode(obj));
}

function inflate(obj) {
	return msgpack.decode(snappy.uncompressSync(obj));
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	deflate: deflate,
	inflate: inflate
};