/**
 * JSON + snappy
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var snappy = require('snappy');

/* Methods -------------------------------------------------------------------*/

function deflate(obj) {
	return snappy.compressSync(JSON.stringify(obj));
}

function inflate(obj) {
	return JSON.parse(snappy.uncompressSync(obj).toString());
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	deflate: deflate,
	inflate: inflate
};