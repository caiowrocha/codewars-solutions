/*
Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.
Example

Input:

[ 1, 8, 4, 4, 6, 1, 8 ]

Expected output:

6
*/


// Stored values to optimize the solution, there were test cases with 100k+ elements.

const findUnique = numbers => {
  let keep = {};

  for(let num of numbers) {
      if(keep[num] > 0) keep[num]++;
      else keep[num] = 1;
  }

  return numbers.find(e => keep[e] < 2);
}
