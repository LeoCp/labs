function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (var i = 0; i < Math.ceil((arr.length / size)); i++) {
    newArr.push(arr.slice(i * size, size*(i + 1)))
  }
  return newArr;
}

console.log(
  chunkArrayInGroups(["a", "b", "c", "d"], 2)  
);
