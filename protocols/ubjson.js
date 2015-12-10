/**
 * Universal binary JSON
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var UBJ = require('ubjson');

/* Methods -------------------------------------------------------------------*/

function encode(obj) {
	var ret = new Buffer(1024);
	var offset = UBJ.packToBufferSync(obj, ret);
	ret = ret.slice(0, offset);
	return ret;
}

function decode(obj) {
	//This really needs a synchronous version... all ubjson projects seem dead.
	return UBJ.unpackBuffer(obj, function() {});
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	encode: encode,
	decode: decode
};