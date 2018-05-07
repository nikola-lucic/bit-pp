/*
1.
Create an object that represents your favourite coffee. 
Please include coffee name, strength, flavour, milk, sugar, … everything you like!
*/

var myCoffe = {
    name: "black coffe",
    strength: "very strong",
    flavour: "arabic",
    milk: "no",
    sugar: "no"
}
console.log(myCoffe)

/*
2.
Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 
*/

var myFavoriteMovie = {
    title: "Leptirica",
    actors: "Jon Doe",
    director: "Jon Doe",
    genre: "horror",
    popularity: "4/5"
}
console.log(myFavoriteMovie)

/*
3.
Write a function that creates an object that represent a computer program. 
Each program is described by: description,  programming language, git repository, 
boolean status that says if the program is completed or not. Add a method that prints out 
program’s repository,  a method that checks if the program is written in 
JavaScript as well as a method that checks if program is completed or not.
*/

function myProgram(description, programLanguage, git, status) {
    var program = {
        description: description,
        programLanguage: programLanguage,
        git: git,
        status: status
    }

    program.checksGit = function() {
        return program.git;
    }

    program.checkLanguage = function() {
        return program.programLanguage === "JS" ? true : false;

    }
    program.checkStatus = function() {
        return program.status === "complited" ? true : false;
    }

    return program;
}

var myJsProgram = myProgram("javascript", "JS", "nikola-lucic", "complited");

console.log(myJsProgram);
console.log(myJsProgram.checksGit());
console.log(myJsProgram.checkLanguage());
console.log(myJsProgram.checkStatus());

var myPhpProgram = myProgram("Php", "Php", "nikola-lucic", "not complited")

console.log(myPhpProgram);
console.log(myPhpProgram.checksGit());
console.log(myPhpProgram.checkLanguage());
console.log(myPhpProgram.checkStatus());

/*
4.
Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, 
type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.  
*/

function myRecepie(name, type, complexity, ingredients, preprtingTime, instruction) {
    recepie = {
        name: name,
        type: type,
        complexity: complexity,
        ingredients: ingredients,
        preprtingTime: preprtingTime,
        instruction: instruction
    }
    recepie.prinListOfIngredients = function() {
        return recepie.ingredients
    }
    recepie.checkTimeOfMaking = function() {
        return recepie.preprtingTime <= 15 ? true : false;
    }
    recepie.deleteIngredient = function() {
        delete recepie.ingredients[2];
        return recepie.ingredients;
    }
    return recepie
}

var myPizzaRecepie = myRecepie("pizza", "fast food", 3, ["eggs", "pastery", "tomato", "chease"], 30, "read recepie on the internet")
console.log(myPizzaRecepie)
console.log(myPizzaRecepie.prinListOfIngredients());
console.log(myPizzaRecepie.checkTimeOfMaking());
console.log(myPizzaRecepie.deleteIngredient());