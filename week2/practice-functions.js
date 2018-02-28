'use strict';

/*
1.Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false
*/

function TrueOrFalse(n) {
    if (typeof n === 'string') {
        return true;
    } else return false;
}
console.log(TrueOrFalse('something'));

/*
2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false
*/

function TrueOrFalse(n) {
    if (typeof n === 'string' && n.length === 0) {
        return true;
    } else return false;
}
console.log(TrueOrFalse('something'));
console.log(TrueOrFalse(''));

/*
3.Write a function that concatenates a given string n times (default is 1).
    "Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/

function HaHaString(str, n) {
    if (typeof n === 'undefined') {
        n = 1;
    } else if (n < 1) {
        return '';
    }
    var res = '';
    for (var i = 0; i < n; i++) {
        res += str;
    }
    return res;
}
console.log(HaHaString('ha', 1));
console.log(HaHaString('ha', 5));

/*
4.Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/

function letterCounter(str, n) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (element === n) {
            sum++;
        }
    }
    return sum;

};
console.log(letterCounter("My random string", 'n'));

/*
5.Write a function to find the position of the first occurrence of a character in a string. 
The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.
*/

function firstTime(str, n) {
    for (var i = 0; i < str.length; i++) {
        var currentCharacter = str[i];
        if (currentCharacter === n) {
            return i + 1;
        }
    } return -1
}
console.log(firstTime("My random string", 'n'));

/*
6.Write a function to find the position of the last occurrence of a character in a string. 
The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
*/

function firstTime(str, n) {
    var lastIndex = str.length - 1;
    for (var i = lastIndex; i >= 0; i--) {
        var currentCharacter = str[i];
        if (currentCharacter === n) {
            return i + 1;
        }
    } return -1
}
console.log(firstTime("My random string", 'n'));

/*
7.Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
*/
//aaaaaaaaaaaaaaaaaaaaaaaaa
function stringIntoArray(str) {
    var space = " "
    var arr = [];

    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (element === space) {
            arr[i] = null;
        } else {
            arr[i] = element;
        }
    }

    return arr;
}

var output = stringIntoArray("This is simple string");
console.log(output);