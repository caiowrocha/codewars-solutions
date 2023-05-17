/*

  A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 arrows to be defeated, our hero has no idea how many arrows he should carry.. Assuming he's gonna grab a specific given number of arrows and move forward to fight another specific given number of dragons, will he survive?

  Return true if yes, false otherwise :)

*/

const hero = (arrows, dragons) => arrows >= dragons * 2;