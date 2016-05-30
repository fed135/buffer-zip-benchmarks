/**
 * JSON + zlib
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var pako = require('pako');

/* Methods -------------------------------------------------------------------*/

function deflate(obj) {
	return pako.deflate(new Buffer(JSON.stringify(obj)));
}

function inflate(obj) {
	return JSON.parse(pako.inflate(obj).toString());
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	deflate: deflate,
	inflate: inflate
};