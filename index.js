/**
 * Benchmarking different transport protocols
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var protocols = require('./protocols');

/* Local variables -----------------------------------------------------------*/

var baseObj = {
	foa: 'bar',
	fob: 1,
	foc: null,
	fod: ['bar', 1, null, { foo: 'bar'}],
	foe: {a: 'bar', b: 1, c:null, d:['bar', 1, null, { foo: 'bar'}]},
	inc: null
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
		baseObj.inc = i;
		res = protocols[p].encode(baseObj);
	}
	eT = Date.now();

	for(i = 0; i<runs; i++) {
		baseObj.inc = i;
		res = protocols[p].encode(baseObj);
		ret = protocols[p].decode(res);
	}

	console.log(p + ':\n');
	console.log('Encode:\t' + (eT - startTime) + '\tms');
	console.log('Decode:\t' + (Date.now() - eT - (eT - startTime)) + '\tms');
	console.log('Size:\t' + res.length + '\tbytes');
	console.log('-----------------------------------\n');
}

Object.keys(protocols).forEach(testProtocol);