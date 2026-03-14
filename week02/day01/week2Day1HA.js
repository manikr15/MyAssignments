// week02 day01 Home Assignment 1

//Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, <name>!" to the console. 
function userProfile(name){
console.log(`Hello, ${name}!`);
}
userProfile("Mani");
//Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` after 2 seconds. 
setTimeout(function(){
    console.log(`\"This message is delayed\"`);
},2000);
//Create an arrow function named `double` that takes a number as a parameter and returns double its value. 
let double=(a)=> a*2
console.log(double(4));
/*  Create a function named `getUserData` that takes a callback function as a parameter. Inside
 `getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
 that should print “Call Back Function” after 3 seconds.
Call the `getUserData` function and log message using the callback function. */

//creating function named getUserData that takes callback fn as parameter
function getUserData(callback){
setTimeout(callback,3000);
}
function userData(){
console.log("Call Back Function");
}
getUserData(userData);

