const addFn = function (a, b, c) {
    return a + b + c;
  };
  
  const addFnCurrying = function (a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  };
  
  const arrowAddFnCurrying = a => b => c => a + b + c;
  
  console.log("addFn(1, 2, 3) =", addFn(1, 2, 3));
  console.log("addFnCurrying(1)(2)(3) =", addFnCurrying(1)(2)(3));
  console.log("arrowAddFnCurrying(1)(2)(3) =", arrowAddFnCurrying(1)(2)(3));
  