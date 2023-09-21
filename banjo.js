// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// My solution 

function areYouPlayingBanjo(name) {
    const initial = name.toLowerCase().split('');
    if(initial[0] == 'r'){
      return name + ' plays banjo';
    }else{
      return name + ' does not play banjo';
    }
};

console.log(areYouPlayingBanjo('bob'));
console.log(areYouPlayingBanjo('Kevin'));
console.log(areYouPlayingBanjo('Rick'));
console.log(areYouPlayingBanjo('rebecca'));