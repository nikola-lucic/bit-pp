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

//a.
//nemam pojma
var something = function (arr, n) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(something([5, 45, 65, 7, 8], 65));

//b.
//nemam pojma
var string = function (n) {
    var arr = [];
    for (var i = 0; i < n.length; i++)
        if (n[i].toLowerCase().slice(0, 3) === 'pro') {
            arr.push(n[i])
        }
    return arr;
}
console.log(string(['profesionalac, Profesor', 'radnik']));


//c.

//poenta je funkcija da se prosledi i callback funkcija da se pozove da bi funkcija radila
var filtersArr = function (arr, f) {
    return f(arr);
}
console.log(filtersArr(['profesionalac, Profesor', 'radnik'], string));

/*
6.Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
    [
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
Write a function that calculates the total price of your shopping list. 
Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 
*/

var list = [
    {
        name: 'apples',
        price: 100
    },
    {
        name: 'milk',
        price: 80
    },
    {
        name: 'bananas',
        price: 150
    }
];
console.log(list);


//a.
var totalPrice = function (list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) { //for in se koristi u objektu
        sum += list[i].price;
    }
    return sum;
}
console.log(totalPrice([
    {
        name: 'apples',
        price: 100
    },
    {
        name: 'milk',
        price: 80
    },
    {
        name: 'bananas',
        price: 150
    }
]));


//b.

var averagePrice = function (list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) { //for in se koristi u objektu
        sum += list[i].price;
    }

    var numberOfProduct = list.length;
    var averagePrice = sum / numberOfProduct;
    //    var averagePrice = sum / list.length ;
    return averagePrice;
};

console.log(averagePrice([
    {
        name: 'apples',
        price: 100
    },
    {
        name: 'milk',
        price: 80
    },
    {
        name: 'bananas',
        price: 150
    }
]));

//c.


var mostExpansive = function (list) {
    var price = 0
    for (var i = 0; i < list.length; i++) {
        price += list[i].price;//problem
        if (price[i] < list[i].price)
            price[i] = list[i].price;
    }
    return price;
}
console.log(mostExpansive([
    {
        name: 'apples',
        price: 100
    },
    {
        name: 'milk',
        price: 80
    },
    {
        name: 'bananas',
        price: 150
    }
]));



/*
8.Write a function that calculates a number of days to your birthday.
Input: 25 February 
Output: 5 days
 */


//prva varijanta
var dayOfBirth = new Date("April 16, 2018");
var CurrentDay = new Date();
var timeToBirthday = Math.floor((dayOfBirth - CurrentDay) / (1000 * 60 * 60 * 24));
return console.log(timeToBirthday);


//duga varijanat
var timeToBirthday = function (dayOfBirth) {
    var dayOfBirthValue = new Date(dayOfBirth);
    var CurrentDay = new Date();
    var timeToBirthday = Math.floor((dayOfBirthValue - CurrentDay) / (1000 * 60 * 60 * 24));
    return timeToBirthday;
}
console.log(timeToBirthday("April 16, 2018"));


/*
9.Write a function that for a given departure and arrival time calculates the time the trip takes.
    Input: 8:22:13 11:43:22
    Output: 3 hours 21 minutes 8 seconds
*/

//prvi nacin

var departure = new Date('February 20, 2018 00:00:18 GMT+00:00');
var arrival = new Date('February 20, 2018 03:10:18 GMT+00:00');
var time = new Date(arrival - departure);

var timeToArrival = time.getUTCHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
//var time = new Date(arrival.getHours() - departure.getHours()) + ':' + (arrival.getMinutes() - departure.getMinutes()) + ':' + (arrival.getSeconds() - departure.getSeconds());
console.log(timeToArrival);
//console.log(timeToArrival);




var TimeToArrival = function (departure, arrival) {
    var departure = new Date(departure);
    var arrival = new Date(arrival);
    var time = new Date(arrival - departure);
    return console.log((time.getUTCHours() + ':'), (time.getMinutes() + ':'), time.getSeconds());

}
console.log(TimeToArrival('February 20, 2018 00:20:18 UTC+00:00', 'February 20, 2018 03:10:18 UTC+00:00'));