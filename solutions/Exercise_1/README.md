# 🔨 Day 1 

### Day 1 - Create Hello World Function

## 🏗️ Description:

Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 
**Example 1:**

```
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
```

**Example 2:**
```
Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
```

**Constraints:**
```
0 <= args.length <= 10
```


## 📝 Explanation: 

- [Solution_1](solutions/Exercise_1/hello_world.js)

> This is a simple exercise to understand the concept of closure. The function `createHelloWorld` returns a function that always returns "Hello World". The function returned by `createHelloWorld` is a closure because it remembers the value of the variable `message` even after the function `createHelloWorld` has finished running.

