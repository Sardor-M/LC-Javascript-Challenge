# 🔨 Day 17

### Day 17 - JSON Deep Equal  

---


## 🏗️ Description:

> Note: This exercise only contains the solution. For the description of the exercise, refer to the leetcode website by clicking [here](https://leetcode.com/problems/json-deep-equal/?utm_campaign=PostD17&utm_medium=Post&utm_source=Post&gio_link_id=4PKqJ0z9).

### Code 
```js
function areDeeplyEqual(o1, o2) {
  if (o1 === o2) {
    return true;
  }
  if (typeof o1 !== "object" || typeof o2 !== "object") return false;
  if (Array.isArray(o1) !== Array.isArray(o2)) return false;
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  for (let key in o1) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
  }
  return true;
}
```

---

## 📝 Explanation:

- [Solution_11](solutions/Exercise_17/deep_equal.js)

> Here, as you can see from the above code, we are using recursion to check if the two objects are deeply equal or not. We are checking if the two objects are equal or not. If they are equal, we are returning true. If they are not equal, we are checking if they are objects or not. If they are not objects, we are returning false. If they are objects, we are checking if they are arrays or not. If they are arrays, we are returning false. If they are not arrays, we are checking if they have the same number of keys. If they do not have the same number of keys, we are returning false. If they have the same number of keys, we are checking if the values of the keys are deeply equal or not. If they are not deeply equal, we are returning false. If they are deeply equal, we are returning true.