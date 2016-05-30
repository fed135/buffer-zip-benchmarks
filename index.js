/**
 * Benchmarking different transport protocols
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var protocols = require('./protocols');

/* Local variables -----------------------------------------------------------*/

var baseObj = {
	channel: 'test',
	list: [
		{ id: 1, x: 0, y: 0, color: 'red', size: 20 },
		{ id: 2, x: 10, y: -10, color: 'brown', size: 40 },
		{ id: 3, x: 1.5, y: 2.35, color: 'blue', size: 20 },
		{ id: 4, x: 100, y: 2000, color: 'green', size: 20 },
		{ id: 5, x: 8, y: 9, color: 'pink', size: 60 },
	]
};
var runs = 256*256;

/* Methods -------------------------------------------------------------------*/

/**
 * Runs the tests for a given protocol
 */
function testProtocol(p) {
	var i;
	var res;
	var ret;
	var startTime = Date.now();
	var eT = 0;

	//Serialize
	for(i = 0; i<runs; i++) {
		baseObj[0] = 'c' + i;
		res = protocols[p].deflate(baseObj);
	}
	eT = Date.now();

	for(i = 0; i<runs; i++) {
		baseObj[0] = 'c' + i;
		res = protocols[p].deflate(baseObj);
		ret = protocols[p].inflate(res);
	}

	console.log(p + ':\n');
	console.log('Encode:\t' + (eT - startTime) + '\tms');
	console.log('Decode:\t' + (Date.now() - eT - (eT - startTime)) + '\tms');
	console.log('Size:\t' + res.length + '\tbytes');
	console.log('Result:\t', ret.channel + ret.list[0].id);
	console.log('-----------------------------------\n');
}

Object.keys(protocols).forEach(testProtocol);

process.exit(0);