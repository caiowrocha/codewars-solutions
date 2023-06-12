const minValue = values => {

  const sortedValues = values.sort((a, b) => a - b);

  const noDupes = new Set(sortedValues);

  return Number.parseInt([...noDupes].join(''));

};


/*
Alternative Solution
const minValue = values => {
  return Number.parseInt([...new Set(values.sort((x, y) => x - y))].join(''));
}
*/