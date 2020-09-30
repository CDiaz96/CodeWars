// Highest to Lowest
//
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// Example:
//
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:
//
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
//
// Solution:
function highAndLow(numbers){
//set numbers in an array
  var numbersArray= numbers.split(" ")
  var sortingArray= numbersArray.sort((a,b)=>a-b)
//sorting[sortingArray.length-1]
  console.log('Printing out the array')
    console.log(sortingArray)
    console.log('Printing out the position of the last elemnt')
   console.log(sortingArray.length-1)
  console.log('Printing out the last element  ')
  var lastNum = (sortingArray[sortingArray.length-1])
  var firstNum = (sortingArray[0])
  return lastNum + ' '+ firstNum

//Organize the numbers from highest to lowest
//return first and last numbers
