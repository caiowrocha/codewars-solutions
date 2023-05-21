/*
  Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

const sumMix = array => {
  let sum = 0;
  for(let element of array) {
      sum += +element;
  };
return sum;
};