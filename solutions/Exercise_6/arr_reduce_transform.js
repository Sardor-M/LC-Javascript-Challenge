var reduce = function (nums, fn, initVal) {
  let val = initVal;

  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }

  return val;
};
