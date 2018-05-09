/*
Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;
'ff', 16, 8 -> 377

*/

function findRadix(num, fromBase, toBase) {
    var xexNumb = parseInt(num, fromBase)
    var cNum = xexNumb.toString(toBase);
    return cNum
}

console.log(findRadix('ff', 16, 8));

/*
2.

Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
    12345 -> 54321
*/

function reversNum(num) {
    var newNum = num.toString().split("").reverse().join("")
    var result = parseInt(newNum)
    return typeof result
}
console.log(reversNum(12345))


/*
3.
Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw”

*/

function reverseString(string) {
    newString = string.toLowerCase().split("").sort().join("")
    return newString
}

console.log(reverseString("Webmaster"));

/*
4.
Write a function to alphabetize words of a given string. 
Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
    
    "Republic Of Serbia" -> "Rbceilpu Of Sabeir"

*/

function sortAlphabetical(word) {
    var splitWord = word.split(" ")
    var newWord = []
    splitWord.forEach(element => {
        newWord.push(element.split("").sort().join(""))
    });
    return newWord.join(" ");
}
console.log(sortAlphabetical("Republic Of Serbia"))

/*
5.Write a function to split a string and convert it into an array of words.

    "John Snow" -> [ 'John', 'Snow' ]
*/

function stingToArray(string) {
    return string.split(" ")
}
console.log(stingToArray("John Snow"));

/*
6.
Write a function to convert a string to its abbreviated form. 

    "John Snow" ->     "John S."
*/

function sliceSurname(name) {
    var array = name.split(" ");
    return array = array[0] + " " + array[1].substring(0, 1);

}
console.log(sliceSurname("John Snow"));

/*
7.
Write a function that can pad (left, right) a string to get to a determined length.

    '0000', 123, 'l' -> 0123 
'00000000', 123, 'r' -> 12300000

*/

function determinatePadLength(string, number, position) {
    return position === "l" ? (string + number).slice(-string.length) : (number + string).substring(0, string.length)
}

console.log(determinatePadLength('0000', 123, 'l'))
console.log(determinatePadLength('00000000', 123, 'r'))

/*
8.
Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"

*/

function capitalizFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizFirstLetter("js string exercises"))

/*
9.
Write a function to hide email addresses to protect them from unauthorized users.

    "somerandomaddress@example.com" -> "somerand...@example.com"
*/

function hideEmail(email) {
    var newEmail = email.split("@")
    return newEmail = newEmail[0].substring(0, newEmail[0].length / 2) + "...@" + newEmail[1];

}
console.log(hideEmail("somerandomaddress@example.com"))

/*
10
Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';

"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

*/

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';

function reverseUpperAndLowerCase(sentence) {
    var newArr = string.split(" ")
    var newSentence = []
    newArr.forEach(word => {
        var splitLetter = word.split("")
        splitLetter.forEach(letter => {
            upperCase.includes(letter) ? newSentence.push(letter.toLowerCase()) : newSentence.push(letter.toUpperCase())
        });
        newSentence.push(" ")
    });
    return newSentence.join("");
}

console.log(reverseUpperAndLowerCase("The Quick Brown Fox"))
