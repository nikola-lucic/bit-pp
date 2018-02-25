'use strict'

/*
1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number 
is odd or even, and display a message to the screen.
*/

//prvi nacin
var n = 0;
for (var i = 0; i < 15; i++) {
    i += i;
    if (i % 2 == +1) {
        console.log('odd');
    } else console.log('even');
}

//drugi nacin
var i = 0;
while (i < 15) {
    i++;
    i
    if (i % 2 == +1) {
        console.log('odd');
    } else console.log('even');
}

//treci nacin


var i = 0;
do {
    i++
    if (i % 2 == +1) {
        console.log('odd');
    } else console.log('even');

} while (i < 15);

/*
2.Write a program to sum the multiples of 3 and 5 under 1000
*/
//nejasan zadatak


//prvi nacin
for (var i = 0; i < 1000; i++) {
    var sum = 0;
    // ((i % 3 === 0) || (i % 5 === 0)) ? console.log(sum += i): console.log('not divadable');

    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
        console.log(sum);
    } else console.log('not divadable');

}
//drugi nacin

var sum = 0;
var i = 0;
while (i < 1000) {
    // ((i % 3 === 0) || (i % 5 === 0)) ? console.log(sum += i): console.log('not divadable');
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    } else console.log('not divadable');
    i++;
}
console.log(sum);

//treci nacin

var sum = 0;
var i = 0;
do {
    // ((i % 3 === 0) || (i % 5 === 0)) ? console.log(sum += i): console.log('not divadable');
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    } else console.log('not divadable');
    i++;
}
while (i < 1000);
console.log(sum);


/*
3.Write a program to compute the sum and product of an array of integers.
*/


//prvi nacin
var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i++) {
    s += array[i];
    p *= array[i];
}
console.log('Sum : ' + s + ' Product :  ' + p);


//drugi nacin
var array = [1, 2, 3, 4, 5, 6];
var i = 0;
var s = 0;
var p = 1;
while (i < array.length) {
    s += array[i];
    p *= array[i];
    i++;
}
console.log('Sum : ' + s + ' Product :  ' + p);


//trecin nacin

var array = [1, 2, 3, 4, 5, 6];
var i = 0;
var s = 0;
var p = 1;
do {
    s += array[i];
    p *= array[i];
    i++;
} while (i < array.length);
console.log('Sum : ' + s + ' Product :  ' + p);


/*
5.Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
*/


//prvi nacin
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var print = [];
var i;
for (i = 0; i < x.length; i++) {
    print[i] = x[i] + '';
}
console.log(print);


//drugi nacin

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var print = [];
var i = 0;
while (i < x.length) {
    print[i] = x[i] + '';
    i++;
}
console.log(print);


//treci nacin

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var print = [];
var i = 0;
do {
    print[i] = x[i] + '';
    i++;
} while (i < x.length);
console.log(print);


/*
5. Write a program that prints the elements of the following array.
var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];
*/


//prvi nacin


var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];

var print = [];
for (var i = 0; i < a.length; i++) {
    print[i] = a[i];
}
console.log(print);

//druigi nacin


var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
var i = 0;
var print = [];
while (i < a.length) {
    print[i] = a[i];
    i++;
}
console.log(print);


//trecin nacin

var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
var i = 0;
var print = [];
do {
    print[i] = a[i];
    i++;
} while (i < a.length);
console.log(print);


/*
5.Write a program that outputs the sum of squares of the first 20 numbers. 
*/

//prvi nacin
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var i;
var Sum = 0;
for (i = 1; i <= a.length; i++) {
    Sum = i * i;
    console.log(Sum);
}


//drugi nacin


var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var i = 0;
var Sum = 0;
while (i <= a.length) {
    Sum = i * i;
    console.log(Sum);
    i++;
}


//treci nacin

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var i = 0;
var Sum = 0;
do {
    Sum = i * i;
    console.log(Sum);
    i++;
} while (i <= a.length);


/*
7.Write a program that computes average marks of the following students. 
Then use this average to determine the corresponding grade. 

David
80
Marko
77
Dany
88
John
95
Thomas
68

The grades are computed as follows :

< 60%
F
< 70%
D
< 80%
C
< 90%
B
< 100%
A
*/


//prvi nacin

var students = [
    ['David', 80],
    ['Marko', 80],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];
var Avgmarks = 0;
for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
}
console.log("Average grade: " + (Avgmarks) / students.length);

var avg = (Avgmarks / students.length);
if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}

//drugi nacin

var students = [
    ['David', 80],
    ['Marko', 80],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];
var Avgmarks = 0;
var i = 0;
while (i < students.length) {
    Avgmarks += students[i][1];
    i++;
}
console.log("Average grade: " + (Avgmarks) / students.length);

var avg = (Avgmarks / students.length);
if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}


//treci nacin

var students = [
    ['David', 80],
    ['Marko', 80],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];
var Avgmarks = 0;
var i = 0;
do {
    Avgmarks += students[i][1];
    i++;
} while (i < students.length);
console.log("Average grade: " + (Avgmarks) / students.length);

var avg = (Avgmarks / students.length);
if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}


/*
8.Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 
(and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", 
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible 
by only one of those).

Note: This is actually an interview question that has been claimed to weed out a 
significant percentage of programmer candidates. So if you’ve solved it, you’re now 
allowed to feel good about yourself.
*/


//prvi nacin 


var a = 100;
var i;
for (i = 0; i <= 100; i++) { //<101
    if (i % 3 === 0) { //(!(i % 3)) 
        console.log('Fizz');
    } else if (i % 5 === 0) { //(!(i % 5)) 
        console.log('Buzz');
    } else if ((i % 3 === 0) && (i % 5 === 0)) { //(!(i % 5) && !(i % 3))
        console.log('FizzBuzz');
    } else console.log(i);
}

//drugi nacin

var a = 100;
var i = 0;
while (i <= 100) { //<101
    if (i % 3 === 0) { //(!(i % 3)) 
        console.log('Fizz');
    } else if (i % 5 === 0) { //(!(i % 5)) 
        console.log('Buzz');
    } else if ((i % 3 === 0) && (i % 5 === 0)) { //(!(i % 5) && !(i % 3))
        console.log('FizzBuzz');
    } else console.log(i);
    i++;
}


//treci nacin

var a = 100;
var i = 0;
do {
    if (i % 3 === 0) { //(!(i % 3)) 
        console.log('Fizz');
    } else if (i % 5 === 0) { //(!(i % 5)) 
        console.log('Buzz');
    } else if ((i % 3 === 0) && (i % 5 === 0)) { //(!(i % 5) && !(i % 3))
        console.log('FizzBuzz');
    } else console.log(i);
    i++;
} while (i <= 100);


//sa neta
var a = 100;
var i;
for (i = 1; i <= 100; i++) {
    if (!(i % 5) && !(i % 3)) {
        console.log('FizzBuzz');
    } else if (!(i % 5) && (i % 3)) {
        console.log('Buzz');
    } else if (!(i % 3)) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

for (var num = 1; num < 101; num++) {

    // check if the number is divisible by 3 or 5
    var checkForThree = num % 3;
    var checkForFive = num % 5;

    // if the number is divisible by both 3 and 5, then print FizzBuzz
    if ((checkForThree == 0) && (checkForFive == 0))
        console.log("FizzBuzz");

    // if the number is divisible by 3, then print Fizz
    else if (checkForThree == 0)
        console.log("Fizz");

    // if the number is divisible by 5, then print Buzz
    else if (checkForFive == 0)
        console.log("Buzz");

    // otherwise just print the number
    else
        console.log(num);
}