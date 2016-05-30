/**
 * msgpack + zlib
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var msgpack = require('msgpack-lite');
var pako = require('pako');

/* Methods -------------------------------------------------------------------*/

function deflate(obj) {
	return pako.deflate(msgpack.encode(obj));
}

function inflate(obj) {
	return msgpack.decode(pako.inflate(obj));
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	deflate: deflate,
	inflate: inflate
};