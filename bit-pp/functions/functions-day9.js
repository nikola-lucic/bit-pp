function sumOfDigits(n) {
    var sum = 0;
    var lastDigit;
    if (typeof n != "number") {
        return -1;
    }
    while (n > 0) {
        lastDigit = n % 10;
        n = (n - lastDigit) / 10;
        sum = sum + lastDigit;

    }
    return sum;
}
console.log(sumOfDigits(481));

function oddOrEven(x) {
    return (x % 2 === 1) ? "odd" : "even";
}
var c = oddOrEven(9);
console.log(c);

function longNumber(n) {
    return (n > 99 && n < 1000) ? true : false;

}
var c = longNumber(100);
console.log(c);

function ArithmeticMean(n, n1, n2, n3) {
    return sum = (n + n1 + n2 + n3) / 4;
    // return sum;  
}
console.log(ArithmeticMean(4, 5, 8, 90));


function arithmeticMean(a, b, c) {
    var firstRow = "";
    var midRow = "";
    var lastRow = "";
    for (i = 0; i < a; i++) {
        firstRow = firstRow + "*";

    }
    for (j = 0; j < b; j++) {
        midRow = midRow + "*";

    }
    for (k = 0; k < c; k++) {
        lastRow = lastRow + "*";

    }
    return firstRow + "\n" + midRow + "\n" + lastRow + "\n"
}
console.log(arithmeticMean(4, 5, 7));


function oddSum(a) {
    var sum = 0;
    var nesto;
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            sum += a[i];
        }

    }
    return sum;
}

console.log(oddSum([4, 5, 8, 9]));

function oddSum(a) {
    var sum = 0;
    var i;
    while( i< a.length){
        if (a[i] % 2 === 1) {
            sum += a[i];
        }
    }
}
return sum;
}

console.log(oddSum([4, 5, 8, 9]));x

function somOfNumbers(a) {

    for (i = 0; i < a.length; i++) {
        if (a[i] >0) {
            a[i]=a[i]*2;
        }
    }
    return a;
}
console.log( somOfNumbers([-3, 11, 5, 3.4, -8]));

function GraderThanMinimum(a) {

    // 4, 7, , 8

    var min = a[0];
    var position = 0;

    for (var i = 1; i < a.length; i++) {
        if ( a[i] < min ) {
            min = a[i];
            position = i;
        }
    }


    if( position != 0){
        var minmin = a[0];
        var positionmin = 0;
    }
    else{
        var minmin = a[1];
        var positionmin = 1;
    }

    for (var j =1; j< a.length ; j++){

        if( j == position){
            continue;
        }

        if( a[j]< minmin){
            minmin = a[j];
            positionmin = j;
        }
    }


    return minmin;
}
console.log( GraderThanMinimum([4, 2, 2, -1, 6]));

function Simetric(a){
    //
    var n = a[0];
    var b =0 ;
    for(i=0; i<a.length; i++)
    {
        b+=i;
    }

    var c= a[6];
    var e =0 ;
    for(i=6; i<a.length; i--)
    {
        e+=i;
    }
    if (b===e)
    {

        console.log('true');
    }
    else{
        console.log('false') ;
    }
    return
}
console.log(Simetric([2, 4, -2, 7, -2, 4, 2]);