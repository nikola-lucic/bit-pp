/*
Write a program to check if the variable is a number. If it’s a number, 
Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”
Sample numbers: 10 | 7 (check one at the time)
Output: 10 / 2 = 5 | X 
*/
var a = 10;
var b = 7;


if (typeof a === 'number' ? true : false) {
    if (true && (a % 2 === 0)) {
        a = a / 2;
    } else
        a = 'x';
}
console.log(a);

if (typeof b === 'number' ? true : false) {
    if (true && (b % 2 === 0)) {
        b = b / 2;
    } else
        b = 'x';
}

console.log(b);

/*
Write a program to check if the number is divisible by 3 and 5. If it is, print that number.
Sample numbers: 15, 12 (check one at the time)
Output: 15 
*/

//prvi nacin

var a = 15;
if ((a % 3 === 0) && (a % 5 === 0)) {
    a = a / 3 / 5;
    //a /= 3;
    //a/=5;
} else a = 'x';
console.log(a);

var b = 12;
if ((b % 3 === 0) && (b % 5 === 0)) {
    b = b / 3 / 5;
    //a /= 3;
    //a/=5;
} else b = 'x';
console.log(b);


//drugi nacin

var a = 15;
(a % 3 === 0) && (a % 5 === 0) ? (a = a / 3 / 5) : (a = 'x');
console.log(a);

var b = 12;
(b % 3 === 0) && (b % 5 === 0) ? (b = b / 3 / 5) : (b = 'x');
console.log(b);

/*
Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.
Sample numbers: 3, 4, 9 (check one at the time)
Output: odd, even, odd
*/

//prvi nacin

var a = 3;
var b = 4;
var c = 9;

//a % 2 === 1
//a % 2 === 0
var number = (a % 2 === +1) ? 'even' : 'odd';
console.log(number);

//b % 2 === 1
//b % 2 === 0
var number = (b % 2 === +1) ? 'even' : 'odd';
console.log(number);

//c % 2 === 1
//c % 2 === 0
var number = (c % 2 === +1) ? 'even' : 'odd';
console.log(number);


//drugi nacin

var a = 3;
var b = 4;
var c = 9;

//a % 2 === 1
//a % 2 === 0
if (a % 2 === +1) {
    a = 'even';
} else a = 'odd';
console.log(a);

//b % 2 === 1
//b % 2 === 0
if (b % 2 === +1) {
    b = 'even';
} else b = 'odd';
console.log(b);

//c % 2 === 1
//c % 2 === 0
if (c % 2 === +1) {
    c = 'even';
} else c = 'odd';
console.log(c);

/*
Write a program that compares two numbers and display the larger. Result should be displayed in the console.
*/

//prvi nacin
var a = 10;
var b = 5;
a > b ? console.log(a) : console.log(b);

//drugi nacin
var a = 10;
var b = 5;

if (a > b) {
    console.log(a);
} else console.log(b);

/*
Write a conditional statement to find the sign of product of three numbers. 
Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output: The sign is - 
*/

var a = 3;
var b = -7;
var c = 2
if ((a + b + c) > 0) {
    console.log('the sign is +');
} else if ((a + b + c) < 0) {
    console.log('the sign is -');
}

/*
Write a conditional statement to sort three numbers.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 
*/
var a = 0;
var b = -1;
var c = 4

//prvi nacin
if ((a > b && c) && (b > c)) {
    console.log(a, b, c);
} else if ((b > a && c) && (a > c)) {
    console.log(b, a, c);
} else if ((c > a && b) && (a > b)) {
    console.log(c, a, b);
} else console.log(c, b, a);

//drugi nacin
/*
var a = 10;
var b = 1;
var c = 4
var min
var min = (a > b && c) && (b > c) ? console.log(a, b, c) :
    ((b > a && c) && (a > c) ? console.log(b, a, c) :
        ((c > a && b) && (a > b)) ? console.log(c, a, b) :
        console.log(c, b, a));

console.log(min);
*/

/*
Write a conditional statement to find the largest of five numbers. Display the result in console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0 
*/

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e) {
    console.log(a);
} else if (b > a && b > c && b > d && b > e) {
    console.log(b);
} else if (c > a && c > b && c > d && c > e) {
    console.log(c);
} else if (d > a && d > b && d > c && d > e) {
    console.log(d);
} else if (e > a && e > b && e > c && e > d) {
    console.log(e);
}