# 🔨 Day 4

### Day 4 - Apply Transform Over Each Element in Array

---

## 🏗️ Description:

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that`returnedArray[i] = fn(arr[i], i).`

Please solve it without the built-in `Array.map` method.

**Example 1:**
```
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
```
**Example 2:**
```
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
```
**Example 3:**
```
Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
```

**Constraints:**
```
0 <= arr.length <= 1000
```
```
-109 <= arr[i] <= 109
```
```
fn returns a number
```

____________________________________________________________________________________________________________________

## 📝 Explanation: 

- [Solution_4](solutions/Exercise_4/array_transform.js)


### 1. Function Definition:
The provided code defines a function called `map` that mimics the behavior of the built-in `map` function in JavaScript. It takes two parameters: `arr` (the input array) and `fn` (the callback function).

### 2. Iteration over Array:
The `forEach` method is used to iterate over each element of the input array `arr`. This method calls a callback function for each element in the array.

### 3. Callback Function:
For each element, the callback function `fn` is called with two arguments: `x` (the current element) and `i` (the index of the current element).

### 4. Element Transformation:
Inside the callback function, the value of the current element `x` is passed to the callback function `fn`. The callback function performs some operation on the element `x` and returns the modified value.

### 5. Array Modification:
The modified value is then assigned back to the corresponding index in the original array `arr` using the assignment operator (`=`). This overwrites the original value with the modified value.

### 6. Return Modified Array:
After all elements have been processed, the modified array `arr` is returned as the result of the map function.