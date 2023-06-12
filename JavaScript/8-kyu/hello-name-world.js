/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given
  or `name` = ""        => return "Hello, World!"
*/

/* Complex Solution */

const hello = n => {

  if(!n || n.length === 0) return `Hello, World!`;

  const arr = new Array();

  for(let i = 0; i < n.length; i++) {

     let letter = n[i];


     if(i === 0) {
       letter = letter.toUpperCase();
       arr.push(letter);
      } else {
       letter = letter.toLowerCase();
       arr.push(letter);
      }
  };

  return `Hello, ${arr.join('')}!`;
};

/*
  Alternative Solution
*/

const hi = n => `Hello, ${n ? (n[0].toUpperCase() + n.substring(1).toLowerCase()) : `World`}!`;