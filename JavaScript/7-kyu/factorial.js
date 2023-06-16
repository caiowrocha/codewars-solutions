/*
Your task is to write function factorial.
*/

const factorial = n => {

  let fat = 1
  ,   i;

  for(i = 1; i <= n; i++) {
    fat *= i;
  }

  return fat;
};