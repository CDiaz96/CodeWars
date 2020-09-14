// Find the capitals
//
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
//
// Solution:

var capitals = function (word) {
  // Write your code here
  var solution = [];
  for (i = 0; i< word.length; i++){
    if(word[i]=== word[i].toUpperCase()){
      solution.push(i);
    }
  }
  return solution;
};
