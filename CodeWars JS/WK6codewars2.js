// 16+18=214
//
// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
//
// You may assume both integers are positive integers
//
// Solution:

function add(num1, num2) {

  let str1 = num1 > num2 ? num1: num2,
      str2 = num2 <= num1 ? num2 : num1,
      sum = '';
  str1 = str1.toString().split('');
  str2 = str2.toString().split('');

  str2 = new Array(str1.length - str2.length).fill(0).concat(str2);
  str1.forEach( (item, index) => {
      sum += parseInt(str2[index]) + parseInt(item);
  } )

  return parseInt(sum);
}
