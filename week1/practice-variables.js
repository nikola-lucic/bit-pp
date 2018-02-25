/*
w1_d2_c1
1. Using the console, create several 
variables using different letter cases 
and beginning characters. Check if they still exist if you refer to them in different case - 
does case matter here? Try to declare a variable starting with number as the first character.
*/
var i = 0;
var M = 'string';
var someVariable = 5 * 4;
console.log(i);
console.log(M);
console.log(someVariable);

/*
2. Save a string describing your current mood in a variable and print it out in console.
*/
var Mode = 'like';
console.log(Mode);

/*
3. Feel free to play around in the console and get familiar with it.
*/

/* 
4. Play around in the console: add, subtract, multiply and divide some numbers. 
Use numbers stored in variables you created as well. 
Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3. Why do we get these results? 
*/
var i = 3 - 2 - 31;
var j = 3 * 5 - 7 / 3;
var k = 4 / 2 - 1.14 * 3;
console.log(i);
console.log(j);
console.log(k);
//bicause of operators

/*
How many grams weight 1.2kg of bananas? 
*/
var bananas = 1 * 1000;
console.log(bananas);

/*
6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? 
What about Tom who is being late half an hour? It is hard to be on time these days…
*/
var sec = 60;
var halfAnHoure = 30 * sec;

var Anna = 5 * sec;
var Tom = halfAnHoure;

console.log(Anna, Tom);

/* 
7. How many MB of additional memory we have if we buy a 4GB USB stick? 
How many news article each in size 98KB can fit in it?
*/
var bytes = 1000;
var kb = 1000 * bytes;
var mb = 1000 * kb;
var gb = 1000 * mb;
var flaskStick = 4 * gb;
var file = 98 * kb;
var howManyFile = flaskStick / file;

console.log(kb);
console.log(mb);
console.log(flaskStick);
console.log(file);
console.log(howManyFile);

/*
8. Create a variable yearOfBirth containing your year of birth. Check what’s the difference between 
yearOfBirth + 1 and yearOfBirth++. 
Can you use the similar principle with any other operator?
*/
var yearOfBirth = 1984;
var yearOfBirth = yearOfBirth + 1;
console.log(yearOfBirth);
var yearOfBirth = yearOfBirth++;
console.log(yearOfBirth);

//similar principles
var yearOfBirth = 1984;
var yearOfBirth = 1 + yearOfBirth;
console.log(yearOfBirth);
var yearOfBirth = ++yearOfBirth;
console.log(yearOfBirth);

/*
9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?
*/
var a = 1;
a = a * 2;
console.log(a);
a = 2 * a;
console.log(a);
a *= 2;
console.log(a);

var b = 1;
b = b + 3;
console.log(b);
b = 3 + b;
console.log(b);
b += 3;
console.log(b);

var c = 1;
c = c / 5;
console.log(c);
c = 5 / c;
console.log(c);
c /= 5;
console.log(c);

var d = 1;
d = d - 7;
console.log(d);
d = d - 7;
console.log(d);
d -= 7;
console.log(d);

/*
10. Create the following variables:
    - a variable containing your name,
    - a variable containing your age,
    - a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.
*/

var name = 'Nikola';
var age = 33;
var haveAcat = true;
console.log(name, age, haveAcat);
console.log(typeof name, typeof age, typeof haveAcat);

/*
11. Check which type are these values:
    - “number”
    - true
    - null
    - “false”
    - 56
*/
console.log(typeof 'number', typeof true, typeof null, typeof 'false', typeof 56);

/*
12. Check how good you are at guessing the Boolean equivalent of different values using the console. 
Do you remember how to check for a Boolean equivalent of a value?
*/

var a = null;
var b = 1;
console.log(a == b);

/*
13. Use the console to check the results you think should go in the following table:
*/
var p;
var q;
p = true
q = true
console.log(p && q); //true


p = true
q = false
console.log(p && q); //false

p = false
q = true
console.log(p && q); //false

p = false
q = false
console.log(p && q); //false

p = true
q = true
console.log(p || q); //true

p = true
q = false
console.log(p || q); //true

p = false
q = true
console.log(p || q); //true

p = false
q = false
console.log(p || q); //false

/*
14. If the variable age stores the information about user’s age, how we 
can check whether it contains a correct value? 
Can age be a negative value? Do we expect it to be greater than 120? 
*/
var userAge = 69;
var check = (userAge > 0) && (user <= 120);
console.log(check);

/*
15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. 
If we store the current speed value in 
the variable speed how we can check if we drive safely?   
*/
var minSpeed = 60;
var maxSpeed = 120;
var safeLimit = (minSpeed >= maxSpeed) || (maxSpeed <= maxSpeed);
console.log(safeLimit);