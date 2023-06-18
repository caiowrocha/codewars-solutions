
/*
Description:

Remove all exclamation marks from the end of sentence.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

const remove = str => {

  let r = str;

  while(r[r.length - 1] === '!') {
      r = r.slice(0, -1);
    };

return r;
}