var breakFast = {
    name: "Nikol",
    ingredients: "slanina sa jajima",
    energy: "1500 Kcal",
    printInstructions: function () {
        console.log('njam njam');
        if (breakFast.energy == "1500 Kcal") {
            console.log("mogu jos");
        } else {
            console.log('sit sam');
        }
    },
    mozeJos: function () {
        breakFast.ingredients = "4 jaja sa slaninom";
        breakFast.energy = "3000 Kcal";
    }
}
//console.log(breakFast);
console.log(breakFast.ingredients);
console.log(breakFast.energy);
//breakFast.mozeJos();
console.log(breakFast.ingredients);
console.log(breakFast.energy);
console.log(breakFast.ingredients, breakFast.energy);
breakFast.printInstructions();

