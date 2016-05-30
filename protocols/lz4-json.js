/**
 * JSON + lz4
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var lz4 = require('lz4');

/* Methods -------------------------------------------------------------------*/

function deflate(obj) {
	return lz4.encode(new Buffer(JSON.stringify(obj)));
}

function inflate(obj) {
	return JSON.parse(lz4.decode(obj).toString());
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	deflate: deflate,
	inflate: inflate
};