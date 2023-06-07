/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/
const measure = (a, b, c) => {
  const sides = [a, b, c];
  const greatest = Math.max(...sides)
  ,     smallest = Math.min(...sides)
  ,     index = sides.indexOf(smallest);

  sides.splice(index, 1);
  const secondSmallest = Math.min(...sides);

  return smallest + secondSmallest > greatest;
};

const isTriangle = (a, b, c) => measure(a, b, c);