const arrDup = function (array) {
  let valuesSoFar = [];
  for (i = 0; i < array.length; ++i) {
    let value = array[i];
    if (valuesSoFar.indexOf(value) !== -1) {
      return true;
    }
    valuesSoFar.push(value);
  }
  return false;
};

//   console.log(arrDup([1, 3, 4, 6, 7,1]));
