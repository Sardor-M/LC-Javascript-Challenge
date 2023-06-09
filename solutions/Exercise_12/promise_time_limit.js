var timeLimit = function (fn, t) {
  return async function (...args) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    let resultPromise;
    try {
      resultPromise = Promise.resolve(fn(...args));
    } catch (error) {
      resultPromise = Promise.reject(error);
    }

    return Promise.race([resultPromise, timeoutPromise]);
  };
};
