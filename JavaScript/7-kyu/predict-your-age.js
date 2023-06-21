/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

    Take a list of ages when each of your great-grandparent died.
    Multiply each number by itself.
    Add them all together.
    Take the square root of the result.
    Divide by two.

*/

const predictAge = (a1, a2, a3, a4, a5, a6, a7, a8) => {

  let sum = (a1 ** 2) + (a2 ** 2) + (a3 ** 2) + (a4 ** 2) + (a5 ** 2) + (a6 ** 2) + (a7 ** 2) + (a8 ** 2);

  let op = Math.floor(Math.sqrt(sum) / 2);

  return op;

};