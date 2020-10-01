// Reverse Letters in Sentence
//
// Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, just the letters in each word.
//
// If there is punctuation, it should be interpreted as a regular character; no special rules.
//
// If there is spacing before/after the input string, leave them there.
//
// String will not be empty.
//
// Solution:
// reverse the letters in the sentence
function reverser(sentence) {
	//seperate the words by the space
  var seperate=sentence.split("   ").reverse()
  for (var i=0; i<=seperate.length; i++){
    var atras =seperate[i].split('').reverse().join('')
   if (seperate[i]!= '' || seperate[i]!== undefined){
    return atras
  }
  console.log(seperate)
  }
  //reverse the order of each word
  //join them back together
  //return sentence as a string
}
