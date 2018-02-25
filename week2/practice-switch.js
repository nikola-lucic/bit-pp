/*
1. Write a program that shows text representation of a day in a week for a number input from 1 to 7. 
Print output in console. For input 1 it should output Monday.
*/
var dayOfWeeks = 'Monday';
switch (dayOfWeeks) {
    case 'Monday':
        console.log('firs day of week');
        break;
    case 'Thursday':
        console.log('second day of week');
        break;
    case 'Wednesday':
        console.log('third day of week');
        break;
    case 'Thursday':
        console.log('forth day of week');
        break;
    case 'Friday':
        console.log('fifth day of week');
        break;
    case 'Saturday':
        console.log('sixth day of week');
        break;
    case 'Sunday':
        console.log('seventh day of week');
        break;
    default:
        console.log('not a day of a week');
        break
}

/*
2.
Write a program that shows text representation of a day in a week for a number input from 1 to 7. 
All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.
*/
var dayOfWeeks = 1;
switch (dayOfWeeks) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Thursday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Input must be a number between 1 and 7');
        break
}

/*
3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a
weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
For input 2, output should be “It’s weekday”. For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
*/
var dayOfWeeks = 1;
switch (dayOfWeeks) {
    case 1:
        console.log('Input must be number between 1 and 7');
        break;
    case 2:
        console.log('Input must be number between 1 and 7');
        break;
    case 3:
        console.log('Input must be number between 1 and 7');
        break;
    case 4:
        console.log('Input must be number between 1 and 7');
        break;
    case 5:
        console.log('Input must be number between 1 and 7');
        break;
    case 6:
    case 7:
        console.log('weekend');
        break;
    default:
        console.log('Input must be number between 1 and 7');
        break
}

/*
4. Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. 
All other cases output a message explaining that input must be a number between 1 and 12. 
For input 2, output should be “February”. For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.
*/
var Months = 1;
switch (Months) {
    case 1:
        console.log('Jan');
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('Mar');
        break;
    case 4:
        console.log('Apr');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('Jun');
        break;
    case 7:
        console.log('Jul');
        break;
    case 8:
        console.log('Aug');
        break;
    case 9:
        console.log('Sep');
        break;
    case 10:
        console.log('Okt');
        break;
    case 11:
        console.log('Nov');
        break;
    case 12:
        console.log('Dec');
        break;
    default:
        console.log('Input must be a number between 1 and 12');
        break
}
/*
5. Write a program that for a 1-12 number input (representing a month in a year) 
shows what season it is. All inputs different from 1-12 output a message explaining 
that input must be a number between 1 and 12. 
*/
var Months = 1;
switch (Months) {
    case 1:
    case 2:
        console.log('Winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Autmn');
    case 12:
        console.log('Winter');
        break;
    default:
        console.log('Input must be a number between 1 and 12');
        break
}
/*
6. Write a program that for a string input of a grade from “A”-“F” outputs a proper 
info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - 
"Passed"", D - "Not so good"", F - "Failed". 
Input different from letters A-F outputs a message "Unknown grade".
*/
var Grade = 'A';
switch (Grade) {
    case 'A':
        console.log('Good job');
        break;
    case 'B':
        console.log('Pretty good');
        break;
    case 'C':
        console.log('Passed');
        break;
    case 'D':
        console.log('Not so good');
        break;
    case 'E':
        console.log('Failed');
        break;
    default:
        console.log('Unknown grade');
        break
}
/*
7. Write a program that takes as input a city name and outputs the country where the city is.
 You may choose which cities and countries you want to output yourself, however there has to be at 
 least 5 countries and 15 cities. Note that each country must have a different number of cities. 
Input different from the listed cities should output a message "Please choose a different city".
*/

var City = 'Belgrade';
switch (City) {
    case 'Belgrade':
    case 'Nis':
    case 'Novi Sad':
    case 'Sabac':
    case 'Valjevo':
        console.log('Serbia');
        break;
    case 'Paris':
    case 'Lyon':
    case 'Lille':
    case 'Marseille':
    case 'Orléans':
        console.log('France');
        break;
    case 'Madrid':
    case 'Granada':
    case 'Barcelona':
    case 'Sevilla':
    case 'Valencia':
        console.log('Spain');
        break;
    case 'Frankfurt':
    case 'Koln':
    case 'Hamburgh':
    case 'Berlin':
    case 'Munchen':
        console.log('Germany');
        break;
    case 'London':
    case 'Leeds':
    case 'Manchester':
    case 'Liverpool':
    case 'Oxford':
        console.log('England');
        break;
    case 'Athens':
    case 'Sparta':
    case 'Thebes':
    case 'Patra':
    case 'Lamia':
        console.log('Greece');
        break;
    default:
        console.log('Unknown grade');
        break
}


/*
8. Write a program that takes as input two numbers and a string denoting the operation 
(“+”, “-”, “*”, “/”) and prints out the appropriate result. 
Watch out for division by zero!
*/

var Number1 = 1;
var opreator = '/';
switch (Number1, opreator) {
    case 'A':
        console.log('Good job');
        break;
    case 'B':
        console.log('Pretty good');
        break;
    case 'C':
        console.log('Passed');
        break;
    case 'D':
        console.log('Not so good');
        break;
    case 'E':
        console.log('Failed');
        break;
    default:
        console.log('Unknown grade');
        break
}