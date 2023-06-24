const throttle = function (fn, t) {
  let lastArgs;
  let shouldCall = true;

  function executeThrottled() {
    if (shouldCall && lastArgs) {
      fn(...lastArgs);
      lastArgs = null;
      shouldCall = false;

      setTimeout(() => {
        shouldCall = true;
        executeThrottled();
      }, t);
    }
  }
  return function (...args) {
    lastArgs = args;
    executeThrottled();
  };
};
