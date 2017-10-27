function confirmEnding(str, target) {
  const last = str.substr(str.length - target.length, str.length);
  return last === target;
}

console.log(
  confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")
);
