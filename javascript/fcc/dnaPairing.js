function pairElement(str) {
  const obj = { A: 'T', T: 'A', C: 'G', G: 'C' };
  return str.split('').map(i => [i, obj[i]]);
}

console.log(
  pairElement("CTCTA")
);
