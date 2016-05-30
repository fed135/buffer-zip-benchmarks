# Data transport benchmark

A quick benchmark to test which is the fastest and the lightest.

## Test

- Encode a complex object
- Decode it
- Do it (256 * 256) times
- Take highest results from 10 runs

## Results

### uncompressed-json

- Encode:	375	ms
- Decode:	381	ms
- Size:		284	bytes

---

### uncompressed-msgpack

- Encode:	513	ms
- Decode:	891	ms
- Size:		188	bytes

---

### uncompressed-protocol-buffers

- Encode:	462	ms
- Decode:	111	ms
- Size:		117	bytes

---

### snappy-json

- Encode:	497	ms
- Decode:	379	ms
- Size:		195	bytes

---

### snappy-protocol-buffers

- Encode:	557	ms
- Decode:	214	ms
- Size:		117	bytes

---

### snappy-msgpack

- Encode:	666	ms
- Decode:	900	ms
- Size:		169	bytes
