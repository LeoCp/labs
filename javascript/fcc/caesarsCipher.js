function rot13(str) {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M", "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const getLetter = (letter) => {
    const index = alphabet.indexOf(letter);

    if (index <= 12) {
      return alphabet[index + (alphabet.length/2)];
    } else {
      return alphabet[index - (alphabet.length/2)];
    }
  };

  return str.split("").map(item => {
    if (item.search(/\.|\s|\!|\?/g) === -1 ) {
      return getLetter(item);
    }
    return item;
  }).join('');

}

console.log(rot13("SERR PBQR PNZC"));
