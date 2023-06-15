/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
*/

// First Solution

const capitalize = s => {

  const u = []
  ,     l = []
  ,     size = s.length;

  let i = 0;

  for(i; i < size; i++) {
      let n = i % 2 === 0
      ,   letter = s[i]
      ,   upper = s[i].toUpperCase()
      ,   lower = s[i].toLowerCase();

      if(n) u.push(upper), l.push(lower);
      else u.push(lower),  l.push(upper);
  };

  return [u.join(''), l.join('')];

};

// Using Methods

const capitalizeAlt = s => {

  const upper = [...s].map((l, i) => i % 2 === 0 ? l.toUpperCase() : l.toLowerCase()).join('');
  const lower = [...s].map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l.toLowerCase()).join('');

  return [upper, lower];
};

// Explicit Methods Alternative

const capitalizeAltExp = s => {

  let upper = [...s].map((letter, index) => {
     let n = index % 2 === 0;
     if(n) {
       return letter.toUpperCase();
     } else {
       return letter.toLowerCase();
       }
 }).join('');

  let lower = [...s].map((letter, index) => {
     let n = index % 2 === 0;
     if(n) {
       return letter.toLowerCase();
     } else {
       return letter.toUpperCase();
     }
  }).join('');

 return [upper, lower];
};

