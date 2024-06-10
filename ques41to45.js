"use strict";
// Q41-
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician
//  in the array.
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
let magician_names = ["harry porter", "hamoon", "goga"];
show_magicians(magician_names);
console.log("----------------------------------");
//Q42-
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of
// magicians by adding the phrase the Great to each magician’s name.Call show_magicians() to see that the list has actually been modified
function show_magicians1(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great1(magicians) {
    return magicians.map(name => `the Great ${name}`);
}
let magician_names1 = ["harry porter", "hamoon", "goga"];
let magic = make_great1(magician_names);
show_magicians1(magic);
console.log("----------------------------------");
// Q43-
// Unchanged Magicians: Start with your work from Exercise 42.
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the 
// new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names
// and one array with the Great added to each magician’s name.
function show_magicians2(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great2(magicians) {
    return magicians.map(name => `the Great ${name}`);
}
let magician_names2 = ["harry porter", "hamoon", "goga"];
let copy_magician_names = magician_names2.slice();
let copy_great_magician = make_great2(copy_magician_names);
show_magicians(magician_names);
show_magicians2(copy_great_magician);
console.log("----------------------------------");
// Q44-
// Sandwiches: Write a function that 
// accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function
// call provides, and it should print a summary of the sandwich that s being ordered. Call the function three times, using a different number
// of arguments each time.
function make_sandwich(...items) {
    console.log("\n\tmaking a sandwich of the following items\n");
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("Enjoy your sandwich!");
}
make_sandwich("bread", "chicken", "mayo");
make_sandwich("bread", "butter");
make_sandwich("bread", "chicken", "egg", "mayo", "cheese", "lettuce", "tomato");
console.log("----------------------------------");
function createcar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const myCar = createcar("toyota", "corolla", { sunroof: "yes", year: 2024 });
console.log(myCar);
