// Fix string case
//
//
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.






//parameter is the string
//return string as either all upper case or all lowercase
//Example: if the string is "coDE" return all lowercase "code"
//if the string is "CODe" then return all uppercase "CODE"
//if the string is "codE" then return all lowercase "code"
//Pseudo:
//Create a lot of if staments that hold each condition
//mesure the leghth of the string and its characters using regrex

function solve(s){
  if(s.match(/[A-Z]/g) === null){
      return s
  }
  else if(s.match(/[A-Z]/g).length > s.match(/[a-z]/g).length){
    return s.toUpperCase()
  }
  else if(s.match(/[A-Z]/g).length < s.match(/[a-z]/g).length){
    return s.toLowerCase()
  }
 else if (s.match(/[A-Z]/g).length === s.match(/[a-z]/g).length){
    return s.toLowerCase()
  }
}
