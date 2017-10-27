function destroyer(arr) {
  delete arguments[0];
  const numbers = Object.values(arguments);

  return arr.filter(i => numbers.indexOf(i) === -1);
}

console.log(
  destroyer([1, 2, 3, 1, 2, 3], 2, 3)
);
