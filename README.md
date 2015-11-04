# yaml-benchmark
A quick benchmark test which is the fastest and the lightest.
The goal being to find the best transport protocol for the Kalm framework.

## Results

On Ubuntu 15.10
With Node 5.0.0
Winner: JSON

### JSON 

speed: 62 ms
size: 144 bytes

### Yaml

speed: 1370 ms
size: 157 bytes

### Yamlish

speed: 3674 ms
size: 240 bytes
