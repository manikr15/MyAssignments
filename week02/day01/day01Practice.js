// Week02 day01 Breakout session practice
// Reverse a string

let companyName="Testleaf"
let reverseName=""
for(let i=companyName.length-1;i>=0;i--){
  reverseName = reverseName + companyName[i];
}
console.log(reverseName);
if(companyName===reverseName){
  console.log("The given string is a palindrome");
}   else{
  console.log("The given string is not a palindrome");
}   