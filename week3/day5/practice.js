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
*/

