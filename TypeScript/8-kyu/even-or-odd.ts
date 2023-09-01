/*
Description:

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/
type Check = (n: number) => string;

export const evenOrOdd: Check = n => {
  return n % 2 === 0 ? 'Even' : 'Odd';
};

evenOrOdd(2);
