var map = function (arr, fn) {
  arr.forEach((x, i) => (arr[i] = fn(x, i)));
  return arr;
};
