/*
  Task

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
Example

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


*/


const sumArray = (nums) => {

  const array = Array.isArray(nums);

  if(array === false || nums.length < 2) return 0;

  let highest = -Infinity
  ,   lowest = Infinity
  ,   sum = 0;

  nums.forEach((num) => {return sum+=num});

  let i;
  for(i=0;i<=nums.length;i++) {
      if(nums[i] > highest) highest = nums[i];
      if(nums[i] < lowest) lowest = nums[i];
  };

  return sum - (lowest + highest);
};