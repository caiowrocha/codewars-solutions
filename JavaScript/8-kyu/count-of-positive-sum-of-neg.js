/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

const countPositivesSumNegatives = input => {

  let n = 0
  ,   e = 0;

  const array = new Array();

  if(input == null || input.length <= 0) return array;

  for(let num of input) {
    if(num > 0) {
      e += 1;
    } else {
      n += num;
    };
  };

  array.push(e, n);

  return array;
};