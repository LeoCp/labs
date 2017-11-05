function getIndexToIns(arr, num) {
  const newArr = arr.sort((a, b) => a - b);
  const value = newArr.find((element, index) => element >= num);

  return newArr.indexOf(value) === -1 ? newArr.length : newArr.indexOf(value);
}

console.log(getIndexToIns([2, 5, 10], 15));
