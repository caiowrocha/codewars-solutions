/*
  Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

const removeExclamationMarks = string => string.split('').map(letter => letter.replace('!', '')).join('');