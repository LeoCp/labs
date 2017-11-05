function diffArray(arr1, arr2) {
  let newArry = [];

  const f = (arr1, arr2) => {
    arr1.forEach(element => {
      if (arr2.indexOf(element) === -1 && newArry.indexOf(element) === -1) {
        newArry.push(element);
      }
    });
  };

  f(arr1, arr2); f(arr2, arr1);

  return newArry;
}

console.log(
  diffArray([1, 2, 3, 6], [4, 1, 5, 2])
);
