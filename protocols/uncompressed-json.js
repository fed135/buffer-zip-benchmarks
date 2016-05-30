/**
 * Uncompressed JSON
 */

'use strict';

/* Methods -------------------------------------------------------------------*/

function deflate(obj) {
	return new Buffer(JSON.stringify(obj));
}

function inflate(obj) {
	return JSON.parse(obj.toString());
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	deflate: deflate,
	inflate: inflate
};