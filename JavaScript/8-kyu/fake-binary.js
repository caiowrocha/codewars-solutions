/*

  Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string


*/


const fakeBin = (numbers) => {

  let i = 0
  ,   array = [];

  for(i; i<=numbers.length; i++) {
      if(numbers[i] < 5) array.push('0');
      else if (numbers[i] >= 5) array.push('1');
  };

  return array.join('');

};