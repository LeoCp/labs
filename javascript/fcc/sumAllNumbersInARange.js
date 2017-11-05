function sumAll(arr) {
  let init, finale;

  if (arr[0] > arr[1]) {
    init = arr[1];
    finale = arr[0];
  } else {
    init = arr[0];
    finale = arr[1];
  }

  const sum = finale => finale >= init ?
    sum(finale - 1) + finale : 0;

  return sum(finale);
}

console.log(sumAll([10, 5]));
