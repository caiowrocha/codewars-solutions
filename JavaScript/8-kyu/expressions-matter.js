/*

  Task

    Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()

*/

function expressionMatters(firstNum, secondNum, thirdNum) {

  const expression = Math.max(
    firstNum+secondNum+thirdNum, firstNum*secondNum*thirdNum, (firstNum+secondNum)*thirdNum, firstNum*(secondNum+thirdNum)
  );

  return expression;
};