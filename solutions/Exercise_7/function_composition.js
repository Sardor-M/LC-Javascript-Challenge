var compose = function (functions) {
  return (num) => {
    var res = num;

    for (var i = functions.length - 1; i >= 0; i--) res = functions[i](res);
    return res;
  };
};
