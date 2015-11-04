var yamlish = require('yamlish');
var yaml = require('js-yaml');

var baseObj = {
	foa: 'bar',
	fob: 1,
	foc: null,
	fod: ['bar', 1, null, { foo: 'bar'}],
	foe: {a: 'bar', b: 1, c:null, d:['bar', 1, null, { foo: 'bar'}]},
	inc: null
};
var result, result2, result3;

//YAML-ish VS JSON
//Part 1: speed

var startTime = Date.now();
for(var i = 0; i<10000; i++) {
	baseObj.inc = i;
	result = JSON.parse(JSON.stringify(baseObj));
}
console.log('JSON speed: ' + (Date.now() - startTime));
console.log('=====================================');

var startTime = Date.now();
for(var i = 0; i<10000; i++) {
	baseObj.inc = i;
	result2 = yamlish.decode(yamlish.encode(baseObj));
}
console.log('Yamlish speed: ' + (Date.now() - startTime));
console.log('=====================================');

var startTime = Date.now();
for(var i = 0; i<10000; i++) {
	baseObj.inc = i;
	result3 = yaml.load(yaml.dump(baseObj));
}
console.log('Yaml speed: ' + (Date.now() - startTime));
console.log('=====================================');

//Part 2: Size

console.log('JSON:');
console.log(
	(
		new Buffer(JSON.stringify(baseObj))
	).length
);

console.log('Yamlish:');
console.log(
	(
		new Buffer(yamlish.encode(baseObj))
	).length
);

console.log('Yaml:');
console.log(
	(
		new Buffer(yaml.dump(baseObj))
	).length
);