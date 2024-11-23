



```javascript
let isPrime = (function isPrimeFunction(n) {
    var cache = {};
    return function isPrime(v) {
        if (v in cache) {
            return cache[v];
        }
        if (v <= 3) {
            return (cache[v] = v > 1);
        }
        if (v % 2 == 0 || v % 3 == 0) {
            return (cache[v] = false);
        }
        var vSqrt = Math.sqrt(v);
        for (let i = 5; i <= vSqrt; i += 6) {
            if (v % i == 0 || v % (i + 2) == 0) {
               return (cache[v] = false);
            }
        }
        return (cache[v] = true);
    };
})();

console.log(isPrime(15))
```


```javascript
function toggle(...input) {
    var count = input.length;
    var cur = 0;
    return function inToggle() {
        console.log(input[cur])
        cur = (cur+1) % count
    }
}

var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");

hello();      // "hello"
hello();      // "hello"

onOff();      // "on"
onOff();      // "off"
onOff();      // "on"

speed();      // "slow"
speed();      // "medium"
speed();      // "fast"
speed();      // "slow"
```