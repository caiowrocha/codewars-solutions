/*
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
Task

Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1

The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1

The other letters don't have power and are only victims.
Example

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

Alphabet war Collection
*/



const alphabetWar = str => {

  const w = [...str].filter(e => e === 'w').length * 4
  ,     p = [...str].filter(e => e === 'p').length * 3
  ,     b = [...str].filter(e => e === 'b').length * 2
  ,     s = [...str].filter(e => e === 's').length;


  const m = [...str].filter(e => e === 'm').length * 4
  ,     q = [...str].filter(e => e === 'q').length * 3
  ,     d = [...str].filter(e => e === 'd').length * 2
  ,     z = [...str].filter(e => e === 'z').length;


  const left = w + p + b + s
  ,     right = m + q + d + z;




  return left > right ? `Left side wins!` : left === right ? `Let's fight again!` : `Right side wins!`;


};