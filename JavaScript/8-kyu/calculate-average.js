/*

  Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.


*/


const findAverage = (array) => {
  if (array.length < 1) return 0;

  let sum = 0;
  array.forEach((num) => {
    return sum+=num;
  })

  return sum / array.length;

};