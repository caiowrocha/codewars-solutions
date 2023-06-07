/*
Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
*/

const humanYearsCatYearsDogYears = h => {

  if(h === 1) return [h, 15, 15];

  let c = 24
  ,   d = 24;

  for(let i = 3; i <= h; i++) {
    c += 4;
    d += 5;
  };

  return [h, c, d];
};