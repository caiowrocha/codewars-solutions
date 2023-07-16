/*
Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

You will be given a string of student names. Sort them and return a list of names in descending order.
*/

const lineupStudents = students => {

    const list = students.split(` `).sort((x, y) => {
      return y.length - x.length || y.localeCompare(x);
    });

   return list;

  };

