'use strict'

/*
Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;
*/

//nemam pojma
function convertFromBaseToBase(str, fromBase, toBase) {
    var num = parseInt(str, fromBase);
    return num.toString(toBase);
}

console.log(convertFromBaseToBase(1033, 23, 10));

/*
2. Write a JavaScript function that Write a JavaScript function that reverses a number.
*/

//nemam pojma
function reversNumber(n) {
    n = n + '';
    return n.split('').reverse();
}
console.log(reversNumber(12345));

/*
3. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.
*/

//nemam pojma
function alpha(n) {
    var n = n + '';
    return n.split('').sort();
}
console.log(alpha('glupan'));

/*
4. Write a function to alphabetize words of a given string. 
Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
*/

function alphabetical(arrays) {
    return arrays.split('').sort('');

}
console.log(alphabetical('bas sam glup'));

/*
5. Write a function to split a string and convert it into an array of words.
*/

function words(w) {
    var arrays = new Array(w);
    return arrays;

}
console.log(words('Glup sam'));


//drugi primer

function words(arrays) {
    return arrays.split(['']).sort('');

}
console.log(words('Glup sam'));

/*
6. Write a function to convert a string to its abbreviated form.
*/

//nemam pojma
abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Robin Singh"));

/*
7. Write a function that can pad (left, right) a string to get to a determined length.
'0000', 123, 'l' -> 0123 
'00000000', 123, '' -> 12300000
*/

function formatted_string(pad, user_str, pad_pos) {
    if (typeof user_str === '') {
        return (user_str + pad).substring(0, pad.length);
    }
    else (pad_pos === 'l')
    return (pad + user_str).slice(-pad.length);
}
console.log(formatted_string('0000', 123, 'l'));
console.log(formatted_string('00000000', 123, ''));


//moj nacin
function formatted_string(pad, user_str, pad_pos) {
    return (pad_pos == 'l') ? ((pad + user_str).slice(-pad.length)) : ((user_str + pad).substring(0, pad.length));

}
console.log(formatted_string('0000', 123, 'l'));
console.log(formatted_string('00000000', 123, ''));

/*
8. Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises"
*/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeFirstLetter('js string exercises'));

//drugi nacin

var string = 'js string exercises';
var newstirng = new String('Js string exercises');

console.log(newstirng);

/*
9.Write a function to hide email addresses to protect them from unauthorized users.
*/


//nemam pojma
var protect_email = function (user_email) {
    var avg;
    var splitted;
    var part1;
    var part2;
    var splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};
console.log(protect_email("robin_singh@example.com"));

/*
10. 
Write a program that accepts a string as input and swaps the case of each character. 
For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';
*/




