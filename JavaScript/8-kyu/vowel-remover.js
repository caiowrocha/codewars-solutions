/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

const Vowels = {
  'a': 'a',
  'e': 'e',
  'i': 'i',
  'o': 'o',
  'u': 'u',
};

const shortcut = str => {
  const r = []

  for(let letter of str) {
    if(!Vowels[letter]) r.push(letter);
  }

  return r.join('');
};