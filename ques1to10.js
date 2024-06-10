"use strict";
// Q1-Install Node.js, TypeScript and VS Code on your computer.
console.log("Installation complete");
console.log("----------------------------------");
// Q2-Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, 
// “Hello Eric,would you like to learn some Python today?”
const personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some python today?`);
console.log("----------------------------------");
// Q3- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personname = "Muhammad Sufyan";
// Lower case
console.log(personname.toLowerCase());
// Upper case
console.log(personname.toUpperCase());
//Tittle case
console.log(personname.replace(/\b\w/g, c => c.toUpperCase()));
console.log("----------------------------------");
// Q4-
//  Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new".
let quote = "“A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
console.log("----------------------------------");
// Q5-
//  Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Albert Einstein";
var message = `${famous_person} once said,"${quote}"`;
console.log(message);
console.log("----------------------------------");
// Q6-
// stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//  Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
//  Then print the name after striping the white spaces.
let personsName = "\t\n  Muhammad Sufyan  \n\t";
console.log("Original:", personsName);
console.log("Stripped:", personsName.trim());
console.log("----------------------------------");
// Q7-
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
//  Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
console.log("----------------------------------");
// Q8-
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
console.log("----------------------------------");
// Q9-
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number.
//  Print that message.
let favoriteNumber = 5;
console.log(`My favourite number is, "${favoriteNumber}"`);
console.log("----------------------------------");
// Q10-
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to 
// write because your programs are too simple at this point, just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does
// author: (Muhammad Sufyan)
// date: (wednesday, May , 30 , 2024)
//printing my favourite food by using message format.
let favouriteGame = "Pubg";
console.log(`My favourite game is "${favouriteGame}"`);
console.log("----------------------------------");
