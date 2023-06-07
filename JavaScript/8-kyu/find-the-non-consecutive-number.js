const firstNonConsecutive = numbers => {

  for(let i = 1; i < numbers.length; i++) {
  let num = numbers[i - 1]
  ,   next = numbers[i];

  if(num + 1 !== next)  {
    return next;
    };
};
return null;
};