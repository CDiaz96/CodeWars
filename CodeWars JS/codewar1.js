// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
//
// Examples:
// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String

// Solution:

function hello(name) {
 if (name !== undefined && name.length > 0) {
    var lowerCaseName = name.toLowerCase()
    var newName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
    return `Hello, ${newName}!`
  } else {
   return `Hello, World!`
  }
}
