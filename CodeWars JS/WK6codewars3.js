// Mumbling
//
// This time no story, no theory. The examples below show you how to write function accum:
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// Solution:

function accum(s) {
		let letters = s.toLowerCase().split('')
	console.log(letters)
  for(let i = 0; i < letters.length; i++) {
    console.log(letters[i])
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
    console.log(letters[i])
  }
  return letters.join('-')
}

accum('eMlet')
