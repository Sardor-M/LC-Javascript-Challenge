# 🔨 Day 20

### Day 20 - Difference Between Two Objects

---

## 🏗️ Description:

> Note: This exercise only contains the solution. For the description of the exercise, refer to the leetcode website by clicking [here](https://leetcode.com/problems/differences-between-two-objects/?utm_campaign=PostD20&utm_medium=Post&utm_source=Post&gio_link_id=LPdzgyA9).

---

### Code:

```js
function objDiff(o1, o2) {
  if (!isObject(o1) && !isObject(o2)) return o1 === o2 ? {} : [o1, o2];

  if (!isObject(o1) || !isObject(o2)) {
    return [o1, o2];
  }

  if (Array.isArray(o1) !== Array.isArray(o2)) {
    return [o1, o2];
  }

  const diff = {};

  for (const key in o1) {
    if (key in o2) {
      const res = objDiff(o1[key], o2[key]);
      if (Object.keys(res).length) {
        diff[key] = res;
      }
    }
  }

  return diff;
}

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
```

## 📝 Explanation:

- [Solution_20](solutions/Exercise_20/diff_objects.js)
