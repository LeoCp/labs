function titleCase(str) {
  return str.split(' ')
    .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(' ');
}

console.log(
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
);
