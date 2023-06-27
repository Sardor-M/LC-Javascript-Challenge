var chunk = function (arr, size) {
  const chunkedArray = [];
  let index = 0;

  // iterating until the index reaches the end of the array
  while (index < arr.length) {
    // slice the array from the current index to the index + size
    // and creating a subarray of length 'size' starting from the current index
    const chunk = arr.slice(index, index + size);
    // adds the chunked subarray to the chunkedArray
    chunkedArray.push(chunk);
    // moves the index to the next chunk
    index += size;
  }
  return chunkedArray;
};
