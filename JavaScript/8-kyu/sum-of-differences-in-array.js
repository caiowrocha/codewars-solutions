/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

const sumOfDifferences = arr => {

  let i
  ,   sum = 0;

  const s = arr.sort((a, b) => b - a);

  for(i = 1; i < s.length; i++) {

    let num = s[i - 1]
     ,   nex = s[i]
     ,   op = num - nex;

     sum += op;
  };

  return sum;
};
