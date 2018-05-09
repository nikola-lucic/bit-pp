//Try to use built-in object methods to solve some of the problems here 

/*
Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
*/

const array = [2, 4, 7, 11, -2, 1]
const duplicate = (array) => {
    const newArry = []
    array.forEach((element) => {
        newArry.push(element, element)
    });
    return newArry
}

console.log(duplicate(array))


/*
Write a functional expression that removes all duplicates in a given array.
    Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]
*/

const array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]

const uniqueArray = function (array) {
    const compareNumbers = (a, b) => {
        return a - b;
    }
    array.sort(compareNumbers)
    const filteredArray = array.filter((element, index, array) => {
        return array.indexOf(element) === index;
    });

    return filteredArray;
};

console.log(uniqueArray(array));

/*
Write a function that checks if a given array has odd number of elements.
    Input: [1, 2, 9, 2, 1]
Output: true
*/

const array = [1, 2, 9, 2, 1];

const checkingOdd = (array) => {

    return array.filter(element => {
        return (element % 2 === 1) ? true : false
    })
}
console.log(checkingOdd(array));


/*
Write a function that counts the number of elements less than the middle element.If the given array has an even number of elements, print out an error message.
    Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/

const array = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

const findLessThenMiddleElement = (array) => {

    const middleElement = array[(array.length - 1) / 2];

    return array.filter(element => {
        return element < middleElement;
    })
}
console.log(findLessThenMiddleElement(array));

/*
4.
Write a function that finds the smallest element of a given array.The function should return an object that 
contains the smallest value and its last position in the array.
    Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }
*/

const array = [1, 4, -2, 11, 8, 1, -2, 3]

const findLessThenMiddleElement = (array) => {
    return Output = {
        minValue: Math.min(...array),
        minLastIndex: array.lastIndexOf(Math.min(...array))
    }
}
console.log(findLessThenMiddleElement(array));


/*
Write a function that finds all the elements in a given array less than a given element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]
*/

const array = [2, 3, 8, -2, 11, 4];
const parameter = 6;

const findLessThenMiddleElement = (array) => {

    return array.filter(element => {
        return element < parameter;
    })
}
console.log(findLessThenMiddleElement(array, parameter));

/*
Write a function that finds all the elements in a given array that start with the “pro” substring.The function should be case insensitive.

    Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]

Write a function that expects an array and a callback function that filters out some of the elements.Use functions defined in a) or b) to test it.

*/

const array = ['JavaScript', 'Programming', 'fun', 'product'];
const parameter = 'pro'

const findProSubstring = (array) => {
    let newArry = []
    array.forEach(element => {
        newArry.push(element.toLowerCase())
    });
    return newArry.filter(element => {
        return element.match(parameter)
    })
}
console.log(findProSubstring(array));


/*
Write a list(array) of products you usually buy in the supermarket.Write a price and name for each product.For example,
    [
        { name: ‘apples’, price: 100},
        { name: ‘milk’, price: 80 },
        { name: ’bananas’, price: 150 }
    ]
Write a function that calculates the total price of your shopping list.
Write a function that calculates the average product price of your shopping list.Print this value with the precision of three decimals.
Write a function that prints out the name of the most expensive product on your shopping list.Write the name in uppercase.
*/

const list = [
    { name: 'apple', price: 100 },
    { name: 'milk', price: 80 },
    { name: 'bananas', price: 150 }
]

const totalPrice = (list) => {
    let sum = 0
    let counts = 0
    list.forEach(element => {
        sum += element.price
        counts++
    });
    return {
        sum,
        counts
    }
}
console.log(totalPrice(list))

const averagePrice = (totalPrice) => {
    let sum = totalPrice(list)
    let average = sum.sum / sum.counts
    return average.toPrecision()
}
console.log(averagePrice(totalPrice))

const mostExpensiveArticle = (list) => {
    return list.reduce((acc, cur) => {
        return acc.price > cur.price ? acc : cur;
    });
}

console.log(mostExpensiveArticle(list))

/*
Write a function that checks if a given string is written in all capitals.
Write a function that checks if a given string contains any digits.
Write a function that checks if a given string is a valid hexadecimal color.
Write a function that checks if a given number belongs to the interval from 1900 to 2018.
Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).
*/

const string = 'vavvVFAVDAFfd59592'
const newString = new String(string)

const isItToUpperCase = (newString) => {
    return newString.toUpperCase() === newString
}

console.log(isItToUpperCase(newString));


const areContainingNumbers = (newString) => {
    let array = newString.split('')


    let result = array.some(element => {
        return parseInt(element)
    });
    return result
}
console.log(areContainingNumbers(newString));

const isItXexNumber = (string) => {

    return (typeof string === "string") && string.length === 6
        && !isNaN(parseInt(string, 16));

}

console.log(isItXexNumber(newString));


/*
Write a function that calculates a number of days to your birthday.
    Input: 25 February
Output: 5 days
*/

const birthday = new Date('2018-04-09').getTime()
const currentTime = new Date()
const result = parseInt(((birthday - currentTime) / (1000 * 60 * 60 * 24)))
console.log(result);

/*
Write a function that for a given departure and arrival time calculates the time the trip takes.
    Input: 8: 22: 13 11: 43: 22
Output: 3 hours 21 minutes 9 seconds
*/


/*
Write a constructor function that creates points in space.Each point in space has its own x, y, and z coordinate.For example, (3, 5, 1) can be a point in space.
*/

function Position1(x, y, z) {
    this.x1 = x
    this.y1 = y
    this.z1 = z
}
const position1 = new Position1(2, 5, 1)

function Position2(x, y, z) {
    this.x2 = x
    this.y2 = y
    this.z2 = z
}

const position2 = new Position2(4, 7, 3)

const distance = ({ x1, y1, z1 }, { x2, y2, z2 }) => {
    console.log((x2 - x1))
    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2));
    return distance;
}

console.log(distance(position1, position2))


/*
Write a function that calculates the distance between two points in the space.
*/

function Position1(x) {
    this.x1 = x

}
const position1 = new Position1(2)

function Position2(x) {
    this.x2 = x

}

const position2 = new Position2(6)

const distance = ({ x1 }, { x2 }) => {
    let distance = Math.sqrt(Math.pow((x2 - x1), 2));
    return distance;
}

console.log(distance(position1, position2))

/*
Write a function that generates a random integer value between 5 and 20.
*/
const randomNumber = (min, max) => {
    let result = Math.random() * (max - min) + min
    return Math.round(result)
}

const min = 5;
const max = 20

console.log(randomNumber(min, max))

/*
Write a function that generates a random integer value between 50 and 100.
*/

const randomNumber = (min, max) => {
    let result = Math.random() * (max - min) + min
    return Math.round(result)
}

const min = 50;
const max = 100

console.log(randomNumber(min, max))

/*
Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.
*/

const generateRandomNumberArray = (number, randomNumber) => {
    const array = []
    for (let i = 0; i < number; i++) {
        array.push(randomNumber(min, max))
    }
    return array
}
const number = 5;
console.log(generateRandomNumberArray(number, randomNumber))


/*
Write a function that shuffles the elements of a given array.
    Input: [3, 6, 11, 2, 9, 1]
Output: [6, 2, 9, 1, 3, 11](it can be any random permutation of the given array)
*/

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var array = [3, 6, 11, 2, 9, 1]

console.log(shuffle(array))

/*Write X 

*   *
 * *
  *
 * *
*   *

*/

var size = 6;
var space = " ";
for (var i = 0; i < size; i++) {
    var leadSpaceCount = i < size / 2 ? i : size - i - 1;
    var spaceBetweenCount = size - 2 - (2 * leadSpaceCount)

    //    console.log(spaceBetweenCount);

    if (spaceBetweenCount > -1) {
        console.log(space.repeat(leadSpaceCount) + '*'
            + space.repeat(spaceBetweenCount) +
            '*' + space.repeat(leadSpaceCount));
    }
    else {
        console.log(space.repeat(leadSpaceCount) + '*'
            + space.repeat(leadSpaceCount));
    }
}
