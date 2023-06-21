/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

const removeUrlAnchor = url => {
  if(!url.includes('#')) return url;

  let i = url.indexOf('#');

  return Array.from(url).slice(0, i).join('');
}