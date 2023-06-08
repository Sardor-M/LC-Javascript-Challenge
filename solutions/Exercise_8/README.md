# 🔨 Day 8

### Day 8 - Allow One Function Call

---

## 🏗️ Description:

Given a function `fn`, return a new function that is identical to the original function except that it ensures `fn` is called at most once.

The first time the returned function is called, it should return the same result as `fn`.
Every subsequent time it is called, it should return `undefined`.

**Example 1:**

```
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
```

**Example 2:**

```
Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
```

**Constraints:**

```
1 <= calls.length <= 10
```
```
1 <= calls[i].length <= 100
```
```
2 <= JSON.stringify(calls).length <= 1000
```

---

## 📝 Explanation:

- [Solution_8](solutions/Exercise_8/function_call.js)

    - Here, this solution defined a function `once` that takes a function `fn` as an parameter. It returns a new function that can only be called once. When the returned function is invoked, it first checks if it has been called before by checking the `isCalled` flag. If it has not been called before, it sets the `isCalled` flag to true and returns the result of the function `fn`. If the returned function has been called before, it returns `undefined`. The purpose of this `once` funcntion is to create a wrapper function that ensures a specific function is only executed once, no matter how many times it is called. This is useful for functions that are expensive to run and only need to be run once. Also this can be useful in situtions where  you want to restrict the certain operations to be performed only once. For example, you can use this to restrict the user to click a button only once.

