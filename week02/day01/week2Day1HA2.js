// week02 day01 Home Assignment 2

//Given a string consisting of words and spaces, return the length of the last word in the string.
function lengthOfLastWord(str){
str=str.trim().split(" ");
let lastWord=str[str.length-1];
console.log(lastWord.length);}

lengthOfLastWord("Hello World");
lengthOfLastWord(" fly me to the moon ");

//Write a function to check if two strings are anagrams.

function anagrams(str1,str2){
    str1=str1.trim().toLowerCase().split("").sort().join();
    str2=str2.trim().toLowerCase().split("").sort().join();;

if(str1===str2){
    console.log("Given strings are anagrams");
} else {
    console.log("Given strings are not anagrams");
}
}

anagrams('listen', 'silent');
anagrams('hello', 'world');