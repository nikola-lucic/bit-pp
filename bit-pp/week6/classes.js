function TestArray() {
    this.name = "a";
    this.values = [2, 4, 7, 1, 75];
    this.print = function () {
        this.values.forEach((e, i) => {
            console.log(this.name, i, e);
        });
    }
}
let ta = new TestArray();
ta.print();

(() => {

})();



/////////////////////////


class Point {
    //x,y

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    print() {
        console.log(`(${this.x},${this.y})`);
    }
}
let p = new Point(4, 5);
p.print();

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    print() {
        console.log("Color point");
        super.print();
        console.log(this.color);
    }
}
let cp = new ColorPoint(4, 3, "orange");
cp.print();

////////////////////////////////////


// 1) Person and Programmer: 

// Create a class Person with properties name and surname. 
// Write a constructor of the Person class. 
// Add a method printPersonData that prints out person’s name and surname. 


class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    PersonData() {
        console.log(`(${this.name} ${this.surname})`);
        // ;
    }
}
let person = new Person("Mika", "Mikic");
console.log(person);


// Create a class Programmer with properties name, surname, and languages that extends Person class. 
//Property languages represents programming languages that the programmer knows.  


class Programmer extends Person {
    constructor({name, surname}, ...languages) {
        super(name, surname);
        this.languages = languages;
    }
    printProgrammerData() {
        super.PersonData();
        console.log(this.languages);
    }

    learnedNewLanguage(){
        this.languages.push();
    };
}

let programmer = new Programmer(person, "JavaScript", 'Php');
console.log(programmer);
