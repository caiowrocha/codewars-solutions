/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


*/


function isVowel(char) {
  return char === 'a' || char === 'e' || char === 'u' || char === 'i' || char === 'e' || char === 'o';
};

const getCount = str => {

  let counter = 0;

  for(let i = 0; i<=str.length; i++) {
    if(isVowel(str[i])) counter++;
  };


  return counter;
};