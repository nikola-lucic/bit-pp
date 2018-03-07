'use strict';

/*
1.Write a function that capitalizes the first letter of each string argument it receives.  
    Function arguments: ‘hello’, ‘there’, ‘ES’, 6
    Output: ‘Hello’, ‘There’, ‘ES’
    */

function upCase(...arg) {
    var newArr = [];

    arg.forEach(function (e, i) {
        newArr.push(e.replace(e[0], e[0].toUpperCase()));
    })

    return newArr;
}

console.log(upCase('hello', 'hi'));

/*
2.
Write a function that calculates sale tax that should be paid for the product of the given price. 
Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
    Input: 120
    Output: 24
*/

const tax = 20;
let productPrice = 120;
function calculateTax(tax, productPrice) {
    let pdv = productPrice / 100 * tax
    return pdv;
};

console.log(calculateTax(productPrice, tax));

/*
3.
Write a function that increases each element of the given array by the given value. If the value is omitted, 
increase each element of the array by 1.  
    Input: [4, 6, 11, -9, 2.1], 2
    Output: [6, 8, 13, -7, 4.1]
*/

let someArray = [2, 3, 5, 6, 7]
function increaseArr(someArray, value = 1) {
    let newArray = [];
    someArray.forEach(function (e, i) {
        let newValue = e + value;
        newArray.push(newValue);
    })
    return newArray;

};
console.log(increaseArr(someArray));

// Write a function that filters all even elements of the array.
//     Input: [6, 11, 9, 0, 3]
//     Output: [6, 0]


let someArray = [3, 5, 62, 2, 3, 6, 8];
function filterEven(someArray) {
    let newArray = [];
    someArray.forEach(function (e) {
        if (e % 2 == 0) {
            newArray.push(e);
        }

    })

    return newArray;

};
console.log(filterEven(someArray));


// Write a function that filters all the strings from the given array that contain substring JS or js.
//     Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
//     Output: ['babel.js, 'JS standard']

let someArray = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
function filterJS(someArray) {
    let result = someArray.filter(function (e) {

        return e.includes("JS") || e.includes('js');

    })
    return result;


}
console.log(filterJS(someArray));

/*
6. Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
    Output: [7, 8]
*/

let someArray = [1.6, 11.34, 9.23, 7, 3.11, 8];
function filterArr (someArray){
    let result = [];
    someArray.forEach(function (e){
         result = Number.isInteger();
    })
    return result;
}
console.log(filterArr(someArray));