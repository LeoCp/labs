function mutation(arr) {
  let hasLetters = true;
  arr[1].split('').forEach(element => {
    if (arr[0].toLowerCase().indexOf(element.toLowerCase()) !== -1) {
      hasLetters = hasLetters && true;
    } else {
      hasLetters = hasLetters && false;
    }
  });
  return hasLetters;
}

console.log(
  mutation(["hello", "hey"])
);
