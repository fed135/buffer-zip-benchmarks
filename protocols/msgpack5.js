/**
 * MSGPACK5
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var pack = require('msgpack5')();

/* Methods -------------------------------------------------------------------*/

function encode(obj) {
	return pack.encode(obj);
}

function decode(obj) {
	return pack.decode(obj);
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	encode: encode,
	decode: decode
};