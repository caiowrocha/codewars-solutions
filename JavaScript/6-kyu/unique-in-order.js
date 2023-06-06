/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

const uniqueInOrder = str => {

  const unique = new Array();

   let i = 0;

   for(i; i < str.length; i++) {

     let e = str[i]
     ,   next = str[i + 1];

     if(e !== next) unique.push(e);

   };

   return unique;
 };