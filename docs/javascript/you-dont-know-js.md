# You don't know JS

:::tip
[github book link](https://github.com/getify/You-Dont-Know-JS/)
:::

## Chapter 4
### Around the Global Scope
#### Globals Shadowing Globals
The difference between following two code snippets.

```javascript
window.something=12
let something=13

window.something=12
var something=13
```
#### DOM Globals

One surprising behavior in the global scope you may encounter with browser-based JS applications: a DOM element with an id attribute automatically creates a global variable that references it.

Consider this markup:

```md
<ul id="my-todo-list">
   <li id="first">Write a book</li>
   ..
</ul>
```
And the JS for that page could include:

```md
first;
// <li id="first">..</li>

window["my-todo-list"];
// <ul id="my-todo-list">..</ul>
```

#### What's in a (Window) Name?

```md
var name = 42;

console.log(name, typeof name);
// "42" string
```

But the truly surprising behavior is that even though we assigned the number 42 to name (and thus window.name), when we then retrieve its value, it's a string "42"! In this case, the weirdness is because name is actually a pre-defined getter/setter on the window object, which insists on its value being a string value. Yikes!

#### Web Workers
Web Workers are a web platform extension on top of browser-JS behavior, which allows a JS file to run in a completely separate thread (operating system wise) from the thread that's running the main JS program.

Since these Web Worker programs run on a separate thread, they're restricted in their communications with the main application thread, to avoid/limit race conditions and other complications. Web Worker code does not have access to the DOM, for example. Some web APIs are, however, made available to the worker, such as navigator.

In a Web Worker, the global object reference is typically made using self:

```javascript
var studentName = "Kyle";
let studentID = 42;

function hello() {
    console.log(`Hello, ${ self.studentName }!`);
}

self.hello();
// Hello, Kyle!

self.studentID;
// undefined
```

#### Node

```javascript
global.studentName = "Kyle";

function hello() {
    console.log(`Hello, ${ studentName }!`);
}

hello();
// Hello, Kyle!

module.exports.hello = hello;
```

#### Others
```javascript
const theGlobalScopeObject =
    (new Function("return this"))();
```

```javascript
const theGlobalScopeObject =
    (typeof globalThis != "undefined") ? globalThis :
    (typeof global != "undefined") ? global :
    (typeof window != "undefined") ? window :
    (typeof self != "undefined") ? self :
    (new Function("return this"))();
```

## Chapter 5: The (Not So) Secret Lifecycle of Variables

### Hoisting: Declaration vs. Expression
A function declaration is hoisted and initialized to its function value (again, called function hoisting). A var variable is also hoisted, and then auto-initialized to undefined. Any subsequent function expression assignments to that variable don't happen until that assignment is processed during runtime execution.

```javascript
greeting();
// TypeError

var greeting = function greeting() {
    console.log("Hello!");
};
```

```javascript
greeting = "Hello!";
console.log(greeting);
// Hello!

var greeting = "Howdy!";
```

### Re-declaration?

```javascript
var studentName = "Frank";
console.log(studentName);
// Frank

var studentName;
console.log(studentName);   // ???
```
hoisting is actually about registering a variable at the beginning of a scope

```javascript
var studentName = "Frank";
console.log(studentName);   // Frank

var studentName;
console.log(studentName);   // Frank <--- still!

// let's add the initialization explicitly
var studentName = undefined;
console.log(studentName);   // undefined <--- see!?
```

```javascript
var greeting;

function greeting() {
    console.log("Hello!");
}

// basically, a no-op
var greeting;

typeof greeting;        // "function"

var greeting = "Hello!";

typeof greeting;        // "string"
```

```javascript
let studentName = "Frank";

var studentName = "Suzy"; // SyntaxError
```

### Loop

```javascript
var keepGoing = true;
while (keepGoing) {
    let value = Math.random();
    if (value > 0.5) {
        keepGoing = false;
    }
}
```
All the rules of scope (including "re-declaration" of let-created variables) are applied per scope instance. In other words, each time a scope is entered during execution, everything resets.

Each loop iteration is its own new scope instance, and within each scope instance, value is only being declared once.


### TDZ
The TDZ is the time window where a variable exists but is still uninitialized, and therefore cannot be accessed in any way. Only the execution of the instructions left by Compiler at the point of the original declaration can do that initialization. After that moment, the TDZ is done, and the variable is free to be used for the rest of the scope.

```javascript
studentName = "Suzy";   // let's try to initialize it!
// ReferenceError

console.log(studentName);

let studentName;
```

```javascript
var studentName = "Kyle";

{
    console.log(studentName);
    // ???

    // ..

    let studentName = "Suzy";

    console.log(studentName);
    // Suzy
}
```