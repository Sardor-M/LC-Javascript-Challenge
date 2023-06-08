var once = function (fn) {
  let isCalled = false;

  return function (...args) {
    if (isCalled) return undefined;

    isCalled = !isCalled;

    return fn(...args);
  };
};
