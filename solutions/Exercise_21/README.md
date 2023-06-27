# 🔨 Day 21

### Day 21 - Chunk Array

---

## 🏗️ Description:

Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's \_.chunk function.

**Example 1:**

```
Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.
```

**Example 2:**

```
Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
```

**Example 3:**

```
Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
Explanation: Size is greater than arr.length thus all elements are in the first subarray.
```

---

### Code:
```js 
var chunk = function (arr, size) {
  const chunkedArray = [];
  let index = 0;

  // iterating until the index reaches the end of the array
  while (index < arr.length) {
    // slice the array from the current index to the index + size
    // and creating a subarray of length 'size' starting from the current index
    const chunk = arr.slice(index, index + size);
    // adds the chunked subarray to the chunkedArray
    chunkedArray.push(chunk);
    // moves the index to the next chunk
    index += size;
  }
  return chunkedArray;
};
```

## 📝 Explanation:

- [Solution_21](solutions/Exercise_21/chunk_array.js)

> Here, using from the above code, we are creating a function that takes an array and a size as parameters. We are creating an empty array called chunkedArray. We are creating a variable called index and initializing it to 0. We are iterating until the index reaches the end of the array. Inside the loop, we are slicing the array from the current index to the index + size and creating a subarray of length 'size' starting from the current index. We are adding the chunked subarray to the chunkedArray. We are moving the index to the next chunk. Finally, we are returning the chunkedArray.


