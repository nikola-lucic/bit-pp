
/*
1.Employees and Managers

Create constructor functions with properties representing the following:
Employee: name, surname, specialization, salary
Manager: name, surname, department, salary

All employees should inherit method:
getSpecialization which prints out the name of the specialization

All managers should inherit methods:
getDepartment which prints out the name of the department
changeDepartment which sets the department value on the given value

All employees and managers should inherit methods:
getData which prints out the name and surname 
getSalary which prints out the salary
increaseSalary which increases the salary by 10% 
*/

function employees(name, surname, specialization, salary) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.salary = salary;
};

employees.prototype.getSpecialization = function () {
    console.log(this.specialization);
};

var employee1 = new employees('Pera', 'Peric', 'programer', 300);
var employee2 = new employees('Zika', 'Slika', 'programer', 500);
var employee3 = new employees('Mika', 'Mikic', 'programer', 700);

//employee1.getSpecialization();

function managers(name, surname, department, salary) {
    this.name = name;
    this.surname = surname;
    this.department = department;
    this.salary = salary;
}

managers.prototype.getDepartment = function () {
    console.log(this.department);
}

managers.prototype.changeDepartment = function (department) {
    this.department = department;
}

var manager1 = new managers('Laza', 'Lazic', 'HR', 1000);
var manager2 = new managers('Sale', 'Salic', 'HR', 1200);

manager1.changeDepartment('analytics');
manager1.getDepartment();

var sharedMethods = {
    getData: function () {
        console.log(this.name, this.surname);
    },
    getSalary: function () {
        console.log(this.salary);
    },
    increaseSalary: function () {
        this.salary = this.salary + this.salary / 10;
    }
};

employees.prototype.__proto__ = sharedMethods;
employee1.increaseSalary();
employee1.getSalary();


