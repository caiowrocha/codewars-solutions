/*
The number 898989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89=81+9289 = 8^1 + 9^289=81+92

The next number in having this property is 135135135:

See this property again: 135=11+32+53135 = 1^1 + 3^2 + 5^3135=11+32+53
Task

We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
Examples

Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

If there are no numbers of this kind in the range [a,b][a, b][a,b] the function should output an empty list.

90, 100 --> []

Enjoy it!!
*/


const Range = (a, b) => {
  const arr = [];
  let i;
  for (i = a; i <= b; i++) {
    arr.push(i);
  };
  return arr;
}

function sumDigPow(a, b) {

  const range = Range(a, b),
    result = new Array();

  let size = range.length;

  for (let i = 0; i < size - 1; i++) {

    let num = String(range[i]).split('').map(n => Number(n));
    let sum = 0;

    for (let j = 0, k = 1; j < num.length; j++, k++) {
      sum += Math.pow(num[j], k);
    };

    if (sum === range[i]) {
      result.push(range[i]);
    };

  };
  return result
};
