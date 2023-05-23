/*
  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/


const XO = string => {
  let x = 0
  ,   o = 0
  ,   str = string.toLowerCase();

  for(let char of str) {
      if(char === 'x') {
        x++;
      } else if(char === 'o') {
        o++;
      };
  };


    return x === 0 && o === 0 ? true : o === x ? true : false;

  };

  /* Alternative


  */