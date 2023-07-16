/*
The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.
*/

const pickIt = arr => {

    const odd = []
    ,     even = [];

    let size = arr.length
    ,   i = 0;

    for(i; i < size; i++) {
       let element = arr[i];
       element % 2 === 0 ? even.push(element) : odd.push(element);
    };
    return [odd, even];
  };