/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

const arrayPlusArray = (a, b) => {

  let sum = 0;
  let size = a.length;

  for(let i = 0; i < size; i++) {
    sum += a[i] + b[i];
  }


  return sum;
};