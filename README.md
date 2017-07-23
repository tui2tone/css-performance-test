# CSS Performance Test

A result of performance test in CSS

## Query Selector

### How to Test

We create a 1000 row of div tag and assign id / class / attr
and create an css file that create a style for difference selector
use a performance variable timing when window in loaded

### Result

Result an in

#### Single Selector

| Selector      | Chrome   |
| ------------- |---------:|
| 1. id      		| 271.9ms |
| 2. tag 				| 267.2ms |
| 2. classname (same) 	| 355.8ms |
| 3. classname (diff) 	| 263.8ms |
| 4. attributes	| 1069.7ms |
| 5. attribute with value	| 1062.9ms |

#### Multiple Selector

| Selector      | Chrome  |
| ------------- |-------------:|
| 1. tag & id | 277 ms |
| 2. tag & classname (same)	| 363.6ms |
| 3. tag & classname (diff) | 281.6ms |
| 4. tag & attributes	| 1192.3ms |
| 5. tag & attribute with value	| 1234.9ms |
| 6. tag & stage | |
| 7. classname & classname |  |
| 8. classname & attributes |  |
| 9. classname & attributes with value |  |
| 10. classname & stage |  |
| 11. classname & classname (diff) |  |
| 12. classname (diff) & classname |  |
| 13. classname (diff) & attributes |  |
| 14. classname (diff) & attributes with value |  |
| 15. classname (diff) & stage |  |

#### Multi-Level Selector

| Selector      | Avg Time  (ms)  |
| ------------- |-------------:|
| 1. id tag      		|  |
| 2. id classname (same)				|  |
| 2. id classname (diff) 	| |
| 3. classname (diff) 	| |
| 4. attributes	| |
| 4. attribute with value	| |