function objDiff(o1, o2) {
  if (!isObject(o1) && !isObject(o2)) return o1 === o2 ? {} : [o1, o2]

  if (!isObject(o1) || !isObject(o2)) {
      return [o1, o2]
  } 

  if (Array.isArray(o1) !== Array.isArray(o2)) {
      return [o1, o2]
  }

  const diff = {}

  for (const key in o1) {
      if (key in o2) {
          const res = objDiff(o1[key], o2[key])
          if (Object.keys(res).length) {
              diff[key] = res
          }
      }
  }

  return diff
};

function isObject(obj) {
  return obj !== null && typeof obj === "object"
}