# 🔨 Day 11

### Day 11 - Sleep 

---

## 🏗️ Description:

> Note: This exercise only contains the solution. For the description of the exercise, refer to the leetcode website by clicking [here](https://leetcode.com/problems/convert-object-to-json-string/?utm_campaign=PostD18&utm_medium=Post&utm_source=Post&gio_link_id=GPnkNmWo).

### Code:
  
  ```js
  function jsonStringify(object) {
  if (object === null) {
    return "null";
  }

  if (typeof object === "string") {
    return '"' + object.replace(/"/g, "\\'") + '"';
  }
  if (typeof object === "boolean" || typeof object === "number") {
    return object.toString();
  }

  if (Array.isArray(object)) {
    const elements = object.map((element) => jsonStringify(element));
    return "[" + elements.join(",") + "]";
  }
  if (typeof object === "object") {
    const keys = Object.keys(object);
    const pairs = keys.map(
      (key) => '"' + key + '":' + jsonStringify(object[key])
    );
    return "{" + pairs.join(",") + "}";
  }
  return "";
}
  ``` 


## 📝 Explanation:

- [Solution_11](solutions/Exercise_18/convert_object.js)

> Here, from the above code, we are using recursion to convert an object to a JSON string. We are checking if the object is null or not. If it is null, we are returning "null". If it is not null, we are checking if the object is a string or not. If it is a string, we are returning the string with the double quotes. If it is not a string, we are checking if the object is a boolean or a number. If it is a boolean or a number, we are returning the string representation of the boolean or the number. If it is not a boolean or a number, we are checking if the object is an array or not. If it is an array, we are returning the string representation of the array. If it is not an array, we are checking if the object is an object or not. If it is an object, we are returning the string representation of the object. If it is not an object, we are returning an empty string.

