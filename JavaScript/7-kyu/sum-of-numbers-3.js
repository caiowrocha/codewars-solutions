/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

const getSum = (a, b) => {

  const max = Math.max(a, b)
  ,     min = Math.min(a, b);

  let result = 0;

  for(let i = min; i <= max; i++) {
     result += i;
  };

  return result;
};