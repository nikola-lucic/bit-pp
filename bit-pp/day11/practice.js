
//asocijativnost sa desna na levo!
console.log((condition)
    ? true
    : (condition)
        ? true : (condition)
            ? true :
            false);


// Example 1

var global = 1;

function myFunc() {
    var local = 2;//nema nikave veze
    global++;
    return global;
}
//nema console.log
//console.log(global);

// Example 2

var done = false;
while (done = true) {//dodela vredonosti =
    // code
    //nema return
}
//nema console.log
//console.log();

// Example 3

for (var i = 1; i <= N; i++) {
    //var N nije definisana
    var sum = 0;//varijabla je lokalna a trebalo bi da bude globalna
    sum = sum + i;
    //nema return
}

console.log(sum);

// Example 4

var x = -32.2;
var isPositive = (x > 0);

if (!isPositive) {//nepotreban !
    console.log(x + " is positive"); //zamena mesta
} else {
    console.log(x + " is not positive"); //zamena mesta

    // Example 5

    var x = -20 //fali ;

    if (x > 0);
    console.log("positive");//ima samo jedan uslov izvacice ga bez obzira na uslov
}

// Example 6

var f = 0, g = 1;

for (var i = 0; i <= 15; i++) {
    console.log(f);//prvo ce da bude 0, drugo je 1, trece je 0, ide do 15v 0 i 1;
    f = f + g;
    g = f - g;
    //fali return
}

//fali console.log();


// Example 7

var x = 5;
var y = 3;
var min = (x < y) ? x : y;

console.log(min)//izbacice nam true ili false

//drugi nacin
//var min;
//console.log( min = (x < y) ? x : y);

// Example 8

function sum(num1, num2) {
    num1 = num1 || 0 //dodaje se vredonost 0 ili bilo koja druga da se postavi kao default ako nema odredjenu vrednost
    num2 = num2 || 0; //dodaje se vredonost 0 ili bilo koja druga da se postavi kao default ako nema odredjenu vrednost

    return num1 + num2;
}

var result = sum(5);//num2 je undefined
// console.log(sum(5));
console.log(result);

// Example 9

function square(num) {
    num *= num;
    //nema return
}

var result = square(10);

// console.log(square(10));
console.log(result);


/*
1. Write a function to count vowels in a provided string.

   function vowelCount(inputString) {
       var vowelList = 'aeiouAEIOU';
       var vowelCount = 0;

       for (var x = 0; x < inputString.length; x++) {
           if (vowelList.indexOf(inputString[x]) !== -1) {
               vowelCount += 1;
           }

       }
       return vowelCount;
   }

   console.log(vowelCount("The quick brown fox"));
*/

/*
Write a function that combines two arrays by alternatingly taking elements.
[a,b,c], [1,2,3] -> [a,1,b,2,c,3]
*/

var a = ["a", "b", "c"];
var b = [1, 2, 3];

var fullArray = function (a, b) {

    var c = [];
    var k;

    if (a.length == b.length) {


        k = 0;
        for (var i = 0; i < a.length; i++) {
            c[k] = a[i];
            k = k + 2;
        }

        k = 1;
        for (var j = 0; j < b.length; j++) {
            c[k] = b[j];
            k = k + 2;
        }

        return c;
    } else {
        console.log("Nizovi nisu istih duzina!");
        //return false;

    }

}
console.log(fullArray(a, b));


/*
Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

var a = [1, 2, 3, 4, 5, 6];
var rotateArray = function (a) {
    var b = [];
    var j = 0;

    for (var i = 2; i < a.length; i++) {
        b[j] = a[i];
        j++;
    }
    for (var i = 0; i < a.length - 4; i++) {

        b[j] = a[i];
        j++;
    }
    return b;
}
console.log(rotateArray(a));

/*
Write a function that takes a number and returns array of its digits.
*/

var a = 365;
var arrayOfDigits = function (a) {
    a = a + '';
    var b = [];
    var j = 0;
    for (var i = 0; i < a.length; i++) {
        b[j] = a[i];
        j++;
    }
    return b;
}
console.log(arrayOfDigits(a));

/*
Write a program that prints a multiplication table for numbers up to 12.
*/

var printNumber = function (x) {

    var sum = '';
    var i;
    var j;
    for (i = 0; i < x; i++) {
        for (j = 0; j < x; j++) {
            sum = sum + ' ' + i * j;
        }
        sum = sum + '\n'
    }
    return sum;
}
console.log(printNumber(13));
