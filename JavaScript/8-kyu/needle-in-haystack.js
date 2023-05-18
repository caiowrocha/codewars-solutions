/*

  Description:

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"


*/


const findNeedle = (haystack) => {
  let index = 0
  ,   i;

  for(i=0;i<=haystack.length;i++) {
    if(haystack[i] === 'needle') index = i;
  };

  return `found the needle at position ${index}`;
};


// Alternative Solution

const needleFind = (haystack) => {

  let index = haystack.indexOf('needle');
  let finding = index !== -1 ? `found the needle at position ${index}` : `couldn't find any needle`;

  return finding;
};