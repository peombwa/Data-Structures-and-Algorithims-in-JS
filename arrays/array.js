/*
var prompt = require('prompt');

// start the prompt

prompt.start();

// get properties of prompt from cmd

prompt.get(['name'], function(err, result) {

    var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
console.log("Enter name to search for : ");
var name = result.name;//"Raymond";
var position = names.indexOf(name);
if(position >= 0 ){
    console.log("Found : "+ name + " at position "+ position);
}
else{
    console.log(name + " not found in array");
}

});

*/

// add elemnts to the begining of an array
/*
var nums = [2,3,4,5];
var newnum = 1;
var N = nums.length;
for(var i = N; i >= 0;i--){
    nums[i] = nums[i - 1];
}

nums[0] = newnum;
console.log(nums.toString());
*/

// remove elements from the begening of an array
/*
var nums = [1,2,3,4,5];
for(var i = 0; i < nums.length; i++){
    nums[i] = nums[i + 1];
}

console.log(nums);
*/

/*
function add(runningTotal, currentValue){
    return runningTotal + currentValue;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);

console.log(sum);

*/

/*
var letters = ["for", "your", "information"];
function getAcronym(letter){
    return letter[0];
}

var acronym = letters.map(getAcronym);

console.log(acronym.join(""));
*/

/*
function isOdd(number){
    return number % 2 != 0;
}

function isEven(number){
    return number % 2 === 0;
}

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var oddNumbers = numbers.filter(isOdd);
console.log("Odd Numbers : ", oddNumbers);

var evenNumbers = numbers.filter(isEven);
console.log("Even Numbers : ", evenNumbers);
*/