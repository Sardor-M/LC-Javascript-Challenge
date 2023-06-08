# 🔨 Day 11

### Day 11 - Sleep 

---

## 🏗️ Description:

Given a positive integer `millis`, write an asynchronous function that sleeps for `millis` milliseconds. It can resolve any value.

**Example 1:**

```
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
```

**Example 2:**

```
Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
```

**Constraints:**

```
1 <= millis <= 1000
```
---

## 📝 Explanation:

- [Solution_11](solutions/Exercise_11/sleep.js)

> Here, the solution we are using is a simple promise that resolves after the given time. The `setTimeout` function is used to resolve the promise after the given time. The `setTimeout` function takes a callback function and the time in milliseconds as parameters. The callback function is called after the given time. The `setTimeout` function returns a timer id which can be used to cancel the timer. The `setTimeout` function is asynchronous and returns immediately. The `sleep` function returns a promise that resolves after the given time.