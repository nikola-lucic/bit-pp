/*
1.Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
*/
var duplicity = function (inputArray) {
    var outputArr = [];
    var j = 0;

    for (var i = 0; i < inputArray.length; i++ , j += 2) {
        outputArr[j] = inputArray[i];
        outputArr[j + 1] = inputArray[i];
    }

    return outputArr;
}
console.log(duplicity([2, 4, 7, 11, -2, 1]));


// for (var i = 0; i < inputArray.length; i++){
//     for( var j = 0; j < 2; j++) {
//         outputArr.push(inputArr[i]);
//     }
// }

/*
2.Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
*/
var Arrays = function (inputArray) {
    var newArray = [];
    var j = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (newArray.indexOf(inputArray[i]) === -1) {
            newArray.push(inputArray[i]);
        }
    }
    return newArray;
}
console.log(Arrays([8, 13, 8, 9, 12, 18, 1, 1, 4, 13]));


/*
3.
Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
Write a function that counts a number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/

var arrayOfElement = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr.length % 2 === 0) {
            return "ERROR";
        } else return true;
    }
    return arr;
}
console.log(arrayOfElement([1, 3, 9, 3, 1]));

//nejasno
var arrayOfElement = function (arr) {
    var m = (arr.length - 1) / 2;
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[m]) {
            j++;
        }
    }
    return j;
}
console.log(arrayOfElement([1, 3, 9, 3, 1]));


/*
4.Write a function that finds the smallest element of a given array.
The function should return an object that contains the smallest value and its last position in the array.
*/



/*
5.Write a function that finds all the elements in a given array less than a given element. 
Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 
*/

var something = function (arr, n) {
    var newstr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            newstr.push(arr[i]);
        }
    }
    return newstr;
}
console.log(something([5, 45, 65, 7, 8], 65));

