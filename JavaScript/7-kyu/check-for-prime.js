/*

In this kata you will create a function to check a non-negative input to see if it is a prime number.

The function will take in a number and will return True if it is a prime number and False if it is not.

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
Examples(input --> output)

0 --> false
1 --> false
2 --> true
11 --> true
12 --> false


*/

const isPrime = number => {
  let squareRoot = Math.sqrt(number);
  if(number < 2) return false;

  for(let i = 2; i <= squareRoot; i++) {
     if(number % i === 0) return false;
  };
  return true;
};