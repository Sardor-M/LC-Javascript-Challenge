function memoize(fn, maxCacheSize = 150) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);
      return value;
    }

    const result = fn(...args);

    if (cache.size >= maxCacheSize) {
      const oldKey = cache.keys().next().value;
      cache.delete(oldKey);
    }
    cache.set(key, result);

    return result;
  };
}
