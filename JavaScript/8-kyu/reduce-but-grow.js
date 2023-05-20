
/*
  Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/


const grow = array => {
  let result = 1;
  for(let num of array) {
    result *= num;
  };
  return result;
};