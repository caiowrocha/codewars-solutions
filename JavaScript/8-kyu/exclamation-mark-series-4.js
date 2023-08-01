/*
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/

const remove = str => {

    let sentence = "";

    for(let i = 0; i < str.length; i++) {
       let letter = str[i];
       if(letter !== '!') sentence+=letter;
    };

    return sentence + '!';
  };