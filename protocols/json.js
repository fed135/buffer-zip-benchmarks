/**
 * JSON
 */

'use strict';

/* Methods -------------------------------------------------------------------*/

function encode(obj) {
	return new Buffer(JSON.stringify(obj));
}

function decode(obj) {
	return JSON.parse(obj.toString());
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	encode: encode,
	decode: decode
};