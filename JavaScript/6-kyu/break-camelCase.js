/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

const solution = str => {

  let r = '';

  for(let char of str) {

    let upperChar = char.toUpperCase();

    if(char === upperChar) r += ' ' + char;

    else r += char;
  }

  return r;
};