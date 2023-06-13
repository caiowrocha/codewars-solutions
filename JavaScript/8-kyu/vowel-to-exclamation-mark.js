
/*
Description:
Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

const Vowel = {
  a: '!',
  e: '!',
  i: '!',
  o: '!',
  u: '!',
};

const replace = s => {
  return s.split('').map(l => {
  let letter = l.toLowerCase();
  return Vowel[letter] ? Vowel[letter] : l;
  }).join('');
};