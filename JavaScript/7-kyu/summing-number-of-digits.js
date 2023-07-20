/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be integer values.
*/


const sumDigits = num => {

    const n = Math.abs(num)
    ,     numbers = String(n).split("").map(element => +element);

    let sum = 0;

    for(let num of numbers) {
        sum += num;
    };

    return sum;
  };