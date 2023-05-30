/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"


*/

const reverseWords = str => {

  let store = new Array()
  ,   reverse = str.split('').reverse().join('').split(' ');

  for(let i = 0; i < reverse.length; i++) {
    let element = reverse[i];
    store.unshift(element);
  };
  return store.join(' ');
};