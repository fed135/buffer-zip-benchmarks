
/* Requires ------------------------------------------------------------------*/

//var zlibJSON = require('./zlib-json');
var uncompressedJSON = require('./uncompressed-json');
//var zlibMP = require('./zlib-msgpack');
var uncompressedMP = require('./uncompressed-msgpack');
var uncompressedPB = require('./uncompressed-pb');
var snappyPB = require('./snappy-pb');
//var LZ4JSON = require('./lz4-json');
//var LZ4MP = require('./lz4-msgpack');
//var pakoJSON = require('./pako-json');
//var pakoMP = require('./pako-msgpack');
var snappyJSON = require('./snappy-json');
var snappyMP = require('./snappy-msgpack');

/* Exports -------------------------------------------------------------------*/

module.exports = {
	'uncompressed-json': uncompressedJSON,
	'uncompressed-msgpack': uncompressedMP,
	'uncompressed-protocol-buffers': uncompressedPB,
	//'zlib-json': zlibJSON,
	//'zlib-msgpack': zlibMP,
	//'lz4-json': LZ4JSON,
	//'lz4-msgpack': LZ4MP,
	//'pako-json': pakoJSON,
	//'pako-msgpack': pakoMP,
	'snappy-json': snappyJSON,
	'snappy-protocol-buffers': snappyPB,
	'snappy-msgpack': snappyMP
};