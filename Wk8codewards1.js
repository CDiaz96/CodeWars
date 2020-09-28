// Numbers in strings
//
// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.
//
// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.



function solve(s){
//get string
//take numbers out of string
   var arrayOfNum= s.match(/\d+/g)
//determine which number group is largest & return it
  var sortedNums= arrayOfNum.sort((a, b) => b - a);
 return parseInt(sortedNums[0]);
};
