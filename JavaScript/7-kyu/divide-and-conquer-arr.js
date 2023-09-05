/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

const divCon = x => {

  let s = 0
    , n = 0;

  for (let i of x) {
    if (typeof i === 'string') {
      s += Number(i);
    } else {
      n += i;
    };
  };

  return n - s;
};
