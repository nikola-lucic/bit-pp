function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.sayName = function () {
        return "Hi i am " + this.name
    }
    this.sayBla = function () {
        return this.sayName() + ": bla"
    }
    this.changeSurname = function () {
        this.surname = "Blab";
        return this.name + " have new surname " + this.surname;
    }
}

var nikola = new Person("Nikola", "Lucic");

console.log(nikola.sayName());
console.log(nikola.sayBla());
console.log(nikola instanceof Person);
console.log(nikola instanceof Object);
console.log(typeof this);
console.log(nikola.changeSurname());
console.log(nikola.surname);
