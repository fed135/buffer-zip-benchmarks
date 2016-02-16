# binary json benchmark

A quick benchmark to test which is the fastest and the lightest.

## Test

- Encode a complex object
- Decode it
- Do it (256 * 256) times

## Results

### json

- Encode:	733	ms
- Decode:	738	ms
- Size:	145	bytes

-----------------------------------

### msgpack

- Encode:	1555	ms
- Decode:	1570	ms
- Size:	81	bytes

-----------------------------------

### ubjson:

- Encode:	5341	ms
- Decode:	3218	ms
- Size:	111	bytes
