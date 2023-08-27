// Complete the square sum function so that it squares each number passed into it and then 
// sums the results together.

// For example, for [1, 2, 2] it should return 9
function squareSum(numbers){
    return numbers.reduce((acc, cv) => acc + (cv * cv), 0)
};

console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))
//console.log(squareSum[1,2,2]);
//console.log(squareSum[2,2,2]);

/*
First you need to 
*/