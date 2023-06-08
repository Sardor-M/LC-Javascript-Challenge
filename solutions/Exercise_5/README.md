# 🔨 Day 5

### Day 5 - Filter Elements from Array

____________________________________________________________________________________________________________________

## 🏗️ Description:
Given an integer array arr and a filtering function fn, return a filtered array `filteredArr`.

The fn function takes one or two arguments:

- `arr[i]` - number from the arr
- `i` - index of `arr[i]`
`filteredArr` should only contain the elements from the arr for which the expression `fn(arr[i], i)` evaluates to a truthy value. A truthy value is a value where `Boolean(value)` returns true.

Please solve it without the built-in Array.filter method.


**Example 1:**

```
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
```

**Example 2:**
```
Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
```

**Example 3:**
```
Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
```

**Constraints:**
```
0 <= arr.length <= 1000
```
```
-109 <= arr[i] <= 109
```

____________________________________________________________________________________________________________________

## 📝 Explanation: 

- [Solution_5](solutions/Exercise_5/filter_elements.js)

### Solution Approach:
The provided code demonstrates a solution approach that mimics the behavior of the built-in `filter` function in JavaScript. It defines a function called `filter` which takes two parameters: `arr` (the input array) and `fn` (the callback function).

- **Iteration through Input Array:**
    - The `forEach` method is used to iterate through each element of the input array `arr`. This method calls a callback function for each element.

- **Callback Function with Arguments:**
    - For each element, the callback function `fn` is invoked with two arguments: `val` (the current element) and `index` (the index of the current element). The callback function performs some evaluation based on the element and returns either a truthy or falsy value.

- **Filtering the Elements:**
    - Inside the callback function, if the return value of the callback function is truthy (evaluates to `true`), the current element is considered a match and added to a result array using the `push` method.

- **Returning the Filtered Array:**
    - Once all the elements have been processed, the filtered array containing the matching elements is returned as the result of the `filter` function.

