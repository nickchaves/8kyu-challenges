// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// My solution
function abbrevName(name){
    const nameSplit = name.toUpperCase().split(' ');
    return nameSplit[0][0] + '.' + nameSplit[1][0];
};

console.log(abbrevName("David Mendieta"));
console.log(abbrevName('john smith'))