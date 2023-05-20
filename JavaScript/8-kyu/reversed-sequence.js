/*

  Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]


*/

const reverseSeq = n => {
  let i
  ,   j = 0
  ,   array = new Array();

  for(i = n; i > 0; i--, j++) {
      array[j] = i;
  };

  return array;
};