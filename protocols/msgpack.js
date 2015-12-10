/**
 * MSGPACK - lite
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var msgpack = require('msgpack-lite');

/* Methods -------------------------------------------------------------------*/

function encode(obj) {
	return msgpack.encode(obj);
}

function decode(obj) {
	return msgpack.decode(obj);
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	encode: encode,
	decode: decode
};