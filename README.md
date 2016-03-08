# binary json benchmark

A quick benchmark to test which is the fastest and the lightest.

## Test

- Encode a complex object
- Decode it
- Do it (256 * 256) times
- Take highest results from 10 runs

## Results

### json

- Encode:		758		ms
- Decode:		738		ms
- Size:			145		bytes

[x] Browser support

-----------------------------------

### [msgpack-lite](https://github.com/kawanet/msgpack-lite)

- Encode:		1555	ms
- Decode:		1596	ms
- Size:			81		bytes

[x] Browser support

-----------------------------------

### [msgpack5](https://github.com/mcollina/msgpack5) 

- Encode:		11396	ms
- Decode:		10116	ms
- Size:			81		bytes

[x] Browser support

-----------------------------------

### [ubjson](https://github.com/Sannis/ubjson) 

- Encode:		5341	ms
- Decode:		3218	ms
- Size:			111		bytes

[ ] Browser support