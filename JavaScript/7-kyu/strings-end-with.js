/*
  Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

const solution = (str, end) => {

  let i = 0
  ,   j = 0
  ,   counter = 0;

  for(i = end.length - 1, j = str.length - 1; i >= 0; i--, j--) {
      if(str[j] === end[i]) counter++;
  };

  return counter >= end.length ? true : false;
};

// While Alternative

/*
    let i = end.length - 1
,   j = str.length - 1
,   counter = 0;

while(i >= 0) {
  if(str[j] === end[i]) counter++;
  i--;
  j--;
}

return counter >= end.length ? true : false;
*/