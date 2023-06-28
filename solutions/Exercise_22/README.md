# 🔨 Day 22

### Day 22 - Flatten Deeply Nested Array

---

## 🏗️ Description:

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.
**Example 1:**

```
Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 0
Output
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

Explanation
Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened.
```

**Example 2:**

```
Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 1
Output
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

Explanation
The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.
```

**Example 3:**

```
Input
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 2
Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

Explanation
The maximum depth of any subarray is 1. Thus, all of them are flattened.
```

## Code

```js
function flat(arr, depth) {
  const result = [];
  flatten(arr, depth, result);
  return result;
}
function flatten(arr, depth, result) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      flatten(arr[i], depth - 1, result);
    } else {
      result.push(arr[i]);
    }
  }
}
```

---

## 📝 Explanation:

- [Solution_22](solutions/Exercise_22/flatten_array.js)

> From the above solution, you can see that we are using recursion to solve this problem. We are using a helper function called flatten to flatten the array. The flatten function takes three parameters, the array, the depth, and the result array. The result array is used to store the flattened array. And the depth is used to check if the current depth is less than the given depth. If the current depth is less than the given depth, then we are flattening the array. Otherwise, we are pushing the element to the result array. We are using a for loop to iterate through the array. Inside the loop, we are checking if the current element is an array and the depth is greater than 0. If it is true, then we are calling the flatten function with the current element, depth - 1, and the result array. Otherwise, we are pushing the element to the result array. Finally, we are returning the result array.
