// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//My solution
const solution = string => string.split('').reverse().join('');

console.log(solution('hello'));