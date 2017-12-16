function myReplace(str, before, after) {
  const isUpperCase = before.charAt(0) === before.charAt(0).toUpperCase();

  if (isUpperCase) {
    const newWord = after.charAt(0).toUpperCase() + after.slice(1);
    return str.replace(before, newWord);
  }

  return str.replace(before, after);
}

console.log(
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
);
