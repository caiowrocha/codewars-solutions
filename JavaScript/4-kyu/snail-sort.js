/*
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

*/

const snail = arr => {

  const sort = new Array();

  while(arr.length) {

    sort.push(...arr.shift());

    for(let i = 0; i < arr.length; i++){
      sort.push(arr[i].pop());
    };

    sort.push(...(arr.pop() || []).reverse());

    for(let i = arr.length - 1; i >= 0; i--) {
      sort.push(arr[i].shift());
    };
  };

    return sort;
  };