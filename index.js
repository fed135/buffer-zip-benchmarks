/**
 * Benchmarking different transport protocols
 *
 * 1- JSON  
 * 2- Yamlish - disqualified
 * 3- Yaml - disqualified
 * 4- Universal Binary JSON
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var UBJ = require('ubjson');

/* Local variables -----------------------------------------------------------*/

var baseObj = {
	foa: 'bar',
	fob: 1,
	foc: null,
	fod: ['bar', 1, null, { foo: 'bar'}],
	foe: {a: 'bar', b: 1, c:null, d:['bar', 1, null, { foo: 'bar'}]},
	inc: null
};
var i, startTime, result, result4, runs = 256*256, offset;

/* Part 1: speed -------------------------------------------------------------*/

// Serialize, then unserialize

// JSON
startTime = Date.now();
for(i = 0; i<runs; i++) {
	baseObj.inc = i;
	result = JSON.parse(JSON.stringify(baseObj));
}
console.log('JSON speed: ' + (Date.now() - startTime) + 'ms');
console.log('=====================================');

// UBJSON
startTime = Date.now();
for(i = 0; i<runs; i++) {
	baseObj.inc = i;
	result4 = new Buffer(1024);
	UBJ.packToBufferSync(baseObj, result4);
	//should add the unpacking time, but we already get an order of idea
  result4 = UBJ.unpackBuffer(result4, function(){});
}
console.log('UBJSON speed: ' + (Date.now() - startTime) + 'ms');
console.log('');


/* Part 2: Size --------------------------------------------------------------*/

// Check serialized object's binary size

console.log('JSON size: ' + (
		new Buffer(JSON.stringify(baseObj))
	).length + ' bytes'
);
console.log('=====================================');

result4 = new Buffer(1024);
offset = UBJ.packToBufferSync(baseObj, result4);
result4 = result4.slice(0, offset);
console.log('UBJSON size: ' + result4.length + ' bytes');

process.exit();