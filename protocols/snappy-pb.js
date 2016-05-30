/**
 * Snappy + Protocol buffers
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var protobuf = require('protocol-buffers');
var snappy = require('snappy');
var fs = require('fs');
var path = require('path');

/* Init ----------------------------------------------------------------------*/

var encoder = protobuf(fs.readFileSync(path.join(__dirname,'schema.proto')));

/* Methods -------------------------------------------------------------------*/

function deflate(obj) {
	return snappy.compressSync(encoder.Packets.encode(obj));
}

function inflate(obj) {
	return encoder.Packets.decode(snappy.uncompressSync(obj));
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	deflate: deflate,
	inflate: inflate
};