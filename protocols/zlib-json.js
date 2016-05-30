/**
 * JSON + zlib
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var zlib = require('zlib');

/* Methods -------------------------------------------------------------------*/

function deflate(obj) {
	return zlib.deflateRawSync(new Buffer(JSON.stringify(obj)));
}

function inflate(obj) {
	return JSON.parse(zlib.inflateRawSync(obj).toString());
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	deflate: deflate,
	inflate: inflate
};