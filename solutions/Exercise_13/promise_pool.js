var promisePool = async function (functions, n) {
  return new Promise((resolve) => {
    if (!functions.length) {
      return resolve();
    }

    let activeCount = 0;
    let completedCount = 0;
    let currentIndex = 0;

    const onFunctionComplete = () => {
      completedCount++;
      activeCount--;

      if (completedCount === functions.length) {
        return resolve();
      } else {
        executeNext();
      }
    };

    const executeNext = () => {
      while (activeCount < n && currentIndex < functions.length) {
        activeCount++;
        const currentFunction = functions[currentIndex++];
        currentFunction().then(onFunctionComplete);
      }
    };

    executeNext();
  });
};
