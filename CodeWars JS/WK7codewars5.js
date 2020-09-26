// 
// Partial Word Searching
//
// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.
//
// The method takes two parameters, the query string and the array of strings to search, and returns an array.
//
// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)
//
// Solution:
var wordSearch = function word_search(query, seq){
    var i = 0;
    var stringArray = [ ];
    while (i<seq.length){
        var seqLower = seq[i].toLowerCase();
        var queryLower = query.toLowerCase();
        if (seqLower.indexOf(queryLower) > -1){
        stringArray.push(seq[i]);
      }
      i++;
    }
    if (stringArray.length === 0){
        stringArray.push("Empty");
    }
    return stringArray;
};
