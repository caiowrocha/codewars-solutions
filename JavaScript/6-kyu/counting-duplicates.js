/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

const duplicateCount = str => {

  let counter = 0
   ,   dupes = new Array();

   const box = str.toLowerCase().split('').sort().join('');

   for(let i = 0; i < box.length; i++) {

     let element = box[i]
     ,   next = box[i + 1];

     if(dupes.includes(element) || dupes.includes(next));

     else if(element === next) {
       dupes.push(element);
       counter++;
     };

   };

   return counter;
 };