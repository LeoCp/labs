function truncateString(str, num) {
  if (num >= str.length) return str;
  if (3 >= num) return `${str.slice(0, num)}...`;
  return `${str.slice(0, num - 3)}...`;
}

console.log(
  truncateString("A-tisket a-tasket A green and yellow basket", 11)
);
