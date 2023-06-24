var debounce = function (fn, t) {
  let timerId = null;

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
    timerId = setTimeout(() => {
      fn.apply(this, args);
      timerId = null;
    }, t);
  };
};
