'use strict';


//1
let upCase = (...arg) => {
    let newArr = [];
    arg.forEach(function (e, i) {
        newArr.push(e.replace(e[0], e[0].toUpperCase()));
    });
    return newArr;

}
console.log(upCase('hello', 'hi'));

let square = x => x * 2;

function square(x) {
    return x * 2;
}


//2.
const tax = 20;
let productPrice = 120;
let pdv = (productPrice, tax) => (productPrice / 100) * tax;

console.log(pdv(productPrice, tax));

//3.
let someArray = [2, 3, 5, 6, 7];
let newArr = (someArray, value = 1) => {
    let newArray = [];
    someArray.forEach(function (e, i) {
        let newValue = e + value;
        newArray.push(newValue);
    });
    return newArray;
};

console.log(newArr(someArray));

//4.

var arr = [4, 5, 7, 8, 14, 45, 76];

let newARR = (arr) => arr.filter(function (e) {
    return e % 2 === 0
})
console.log(newARR(arr));

//5.

let someArray = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

let filterJS = (someArray) => someArray.filter(function(e){
    return e.includes("JS") || e.includes('js');
});
console.log(filterJS(someArray));

//6.

let someArray = [1.6, 11.34, 9.23, 7, 3.11, 8];
let result = someArray.filter(number => number % 1 === 0);
console.log(result);
