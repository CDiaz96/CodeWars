
// Are they Square?
//
//
// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.
//
// Your function should return true if all elements in the array are square numbers and false if not.
//
// An empty array should return undefined. You can assume that all array elements will be positive integers.
//
//
// Solution:

var isSquare = function(arr){
  if (arr.length===0)
  {
    return undefined;
  }
  for (i=0; i<arr.length; i++)
  {
    if (Math.sqrt(arr[i])%1!==0)
    {
      return false;
    }
  }
  return true;
}
