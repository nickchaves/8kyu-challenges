// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My solution
function findAverage(array) {
    if(array.length === 0){
        return 0
    }else{
        return array.reduce((a,b) => a + b, 0) / array.length;
    }
}

console.log(findAverage([1,1,1]))
console.log(findAverage([1,2,3]))
console.log(findAverage([]))