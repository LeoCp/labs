function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const isFirstLetterVowel = vowels.indexOf(str.charAt(0).toLowerCase()) !== -1;
  const isSecondLetterVowel = vowels.indexOf(str.charAt(1).toLowerCase()) !== -1;

  if (isFirstLetterVowel) return str.concat('way');

  if (isSecondLetterVowel) return str.substr(1, str.length).concat(str.charAt(0) + 'ay');

  return str.substr(2, str.length).concat(str.substr(0, 2) + 'ay');
}

console.log(
  translatePigLatin("california")
);
