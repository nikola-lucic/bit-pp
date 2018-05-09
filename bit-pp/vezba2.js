/*Try to solve all assignments on a separate branch. Keep in mind that you should try to use built-in objects and their methods,
 solo or combined. You should use loops only for the 4 and 10 assignment, all others can be solved using built-in object methods. 
*/


/*
Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

'ff', 16, 8 -> 377
*/

const parser = (number) => {

    const mutateNumber = parseInt(number, 16)
    return mutateNumber
}
const number = 'ff'
console.log(parser(number))

/*
Write a JavaScript function that reverses a number.typeof result of the function should be “number”.
12345 -> 12345

*/

const number = 12345;

const reverse = (number) => {
    toString(number)
    return typeof number
}
console.log(reverse(number));


/*
Write a JavaScript function that returns a passed string with letters in alphabetical order.
    Note: Assume punctuation, numbers and symbols are not included in the passed string.
 
“Webmaster” -> “abeemrstw”
*/

const reverseString = (string) => {

    const reverseString = (string.split('')).reverse().join('')
    return reverseString
}
const string = 'Webmaster'
console.log(reverseString(string))

/*
Write a function to alphabetize words of a given string.Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
    
    "Republic of Serbia" -> "Rbceilpu Of Sabeir"
*/

const reverseString = (string) => {

    const splitString = string.split(' ')
    let reverse = []
    let newarrr = []

    splitString.forEach(element => {
        newarrr.push(element.split("").sort().join(""))
    });
    return newarrr.join("")
}
const string = 'Republic of Serbia'
console.log(reverseString(string))


/*
Write a function to split a string and convert it into an array of words.
    "John Snow" -> ['John', 'Snow']
*/

const string = "John Snow";

const splitToArrayOfWords = (string) => {
    const array = string.split(' ')
    return array
}
console.log(splitToArrayOfWords(string))

/*
Write a function to convert a string to its abbreviated form.

"John Snow" -> "John S."
*/

const string = "John Snow";

const sliceString = (string) => {
    let array = string.split(' ')
    array = array[0] + ' ' + array[1].substring(0, 1);
    return array
}
console.log(sliceString(string))

/*
Write a function that can pad(left, right) a string to get to a determined length.

    '0000', 123, 'l' -> 0123
'00000000', 123, '' -> 12300000
*/

function formatted_string(pad, user_str, pad_pos) {

    return (pad_pos === 'l') ? (pad + user_str).slice(-pad.length) : (user_str + pad).substring(0, pad.length)

}
console.log(formatted_string('0000', 123, 'l'));
console.log(formatted_string('00000000', 123, ''));


/*
Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"
*/

const string = "js string exercises";

const firstLetterToUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(firstLetterToUpperCase(string))


/*
Write a function to hide email addresses to protect them from unauthorized users.

    "somerandomaddress@example.com" -> "somerand...@example.com"
*/

const password = "somerandomaddress@example.com";
const protectPassword = (password) => {
    let spliter = password.split('@')
    return spliter[0].substring(0, spliter[0].length / 2) + '...@' + spliter[1]
}

console.log(protectPassword(password))


/*
Write a program that accepts a string as input and swaps the case of each character.For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';

"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
*/

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';

const sentence = 'The Quick Brown Fox';

const reverse = (sentence) => {
    const newArray = [];
    let newWord = []
    let b = []
    const wordsArr = sentence.split(' ')

    wordsArr.forEach(element => {
        let letterArr = element.split('');
        letterArr.forEach(letter => {
            if (UPPER.includes(letter)) {
                b.push(letter.toLowerCase());
            } else if (LOWER.includes(letter)) {
                b.push(letter.toUpperCase());
            }
        });
        b.push(' ')
    });

    return b.join('');
}

console.log(reverse(sentence))