/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

const number = arr => {

  const o = [];

  for(let i = 1; i < arr.length + 1; i++) {
     let letter = arr[i - 1];
     o.push(`${i}: ${letter}`);
  }
  return o;
};

// Map Alternative
const numberAlt = arr => arr.map((n, i) => `${i + 1}: ${n}`);