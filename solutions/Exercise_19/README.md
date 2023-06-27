# 🔨 Day 19

### Day 19 - Array of Objects to Matrix

---

## 🏗️ Description:

> Note: This exercise only contains the solution. For the description of the exercise, refer to the leetcode website by clicking [here](https://leetcode.com/problems/array-of-objects-to-matrix/?utm_campaign=PostD19&utm_medium=Post&utm_source=Post&gio_link_id=EoZk0Zy9).

---
### Code:
```js 
const jsonToMatrix = function (arr) {
  const isObject = (x) => x !== null && typeof x === "object";

  // Recursive function to extract keys from nested objects
  const getKeys = (object) => {
    if (!isObject(object)) return [""]; // If the value is not an object, return an empty key
    const result = [];
    for (const key of Object.keys(object)) {
      const childKeys = getKeys(object[key]); // Recursively get keys from nested objects
      for (const childKey of childKeys) {
        result.push(childKey ? `${key}.${childKey}` : key); // Append child keys with dot notation
      }
    }
    return result;
  };

  // Extract all unique keys from the array of objects and sort them
  const keys = Array.from(
    new Set(
      arr.reduce((acc, curr) => {
        getKeys(curr).forEach((k) => acc.add(k));
        return acc;
      }, new Set())
    )
  ).sort();

  // Retrieve the value for a given key path in an object
  const getValue = (obj, path) => {
    const paths = path.split(".");
    let i = 0;
    let value = obj;
    while (i < paths.length && isObject(value)) {
      value = value[paths[i++]];
    }
    // If the value is not found or is an object, return an empty string
    return i < paths.length || isObject(value) || value === undefined
      ? ""
      : value;
  };

  // Create the matrix representation with keys as the first row and values as subsequent rows
  const matrix = [keys];
  arr.forEach((obj) => {
    matrix.push(keys.map((key) => getValue(obj, key)));
  });

  return matrix;
};
```

## 📝 Explanation:

- [Solution_16](solutions/Exercise_19/object_to_matrix.js)

> Here, from the above code, we are using recursion to convert an array of objects to a matrix. We are checking if the value is an object or not. If it is not an object, we are returning an empty key. If it is an object, we are extracting all the unique keys from the array of objects and sorting them. We are retrieving the value for a given key path in an object. We are creating the matrix representation with keys as the first row and values as subsequent rows. 


