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
