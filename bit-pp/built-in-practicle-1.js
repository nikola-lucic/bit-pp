/*
1.
Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
*/

function duplicateArray(array) {
    var newArray = [];
    array.forEach(function (element) {
        newArray.push(element, element)
    });
    return newArray
}
console.log(duplicateArray([2, 4, 7, 11, -2, 1]))

/*
2.
Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
*/

function removeDuplicate(array) {
    var compareNumbers = function (a, b) {
        return a - b;
    }
    array.sort(compareNumbers);
    var filteredArray = [];
    array.forEach(function (element, index, array) {
        if (array.indexOf(element) === index) {
            filteredArray.push(element);
        }
    });
    return filteredArray
}
console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

/*
3.
Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
Write a function that counts the number of elements less than the middle element. 
If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/

function checkOddNumbers(array) {
    var result;
    array.forEach(function (element) {
        (element % 2) === 1 ? (result = true) : (result = false)
    });
    return result

}
console.log(checkOddNumbers([1, 2, 9, 2, 1]))


function findSmallestNumber(array) {
    var counter = 0;
    var output;
    array.forEach(function (element) {
        counter++;
        counter % 2 !== 0 ? (output = true) : (output = "error")

    });
    return output
}

console.log(findSmallestNumber([-1, 8.1, 3, 6, 2.3, 44, 2.11]))

/*
4.

Write a function that finds the smallest element of a given array. The function should return an object that 
contains 
the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }
*/

function findSmallestNumber(array) {
    return output = {
        minValue: Math.min(null, array),
        minLastIndex: array.lastIndexOf(Math.min(null, array))
    }
}

console.log(findSmallestNumber([1, 4, -2, 11, 8, 1, -2, 3]));

/*
5.
Write a function that finds all the elements in a given array less than a given element. 
    Input: [2, 3, 8, -2, 11, 4], 6 
    Output: [2, 3, -2, 4]
Write a function that finds all the elements in a given array that start with the “pro” substring. 

The function should be case insensitive. 
        Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
    Output: [’Programming’, ‘product’]

Write a function that expects an array and a callback function that filters out some of the elements. 
Use functions defined in a) or b) to test it. 

*/

function findElements(array, parameter) {

}

console.log([2, 3, 8, -2, 11, 4], 6)

function isBigEnough(array, parameter) {
    var newArray = []
    array.forEach(function (element) {
        if (element < parameter) {
            newArray.push(element)
        }
    });
    return newArray
}
console.log(isBigEnough([2, 3, 8, -2, 11, 4], 6))


function filteredArray(array, parameter) {
    var lowerCase = []
    newArray = []
    array.forEach(function (element) {
        lowerCase.push(element.toLowerCase())
    });

    lowerCase.forEach(function (element) {
        if (element.match(parameter)) {
            newArray.push(element);
        }
    });
    return newArray
}

console.log(filteredArray(['JavaScript', 'Programming', 'fun', 'product'], "pro"))