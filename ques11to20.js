"use strict";
// Q11-
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list,
//  one at a time.
let names = ["Ahmed Raza", "Abdul Rafey", "Mustafa", "Rabeel"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log("----------------------------------");
// Q12-Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.
let Names = ["Ahmed Raza", "Abdul Rafey", "Mustafa", "Rabeel"];
var message = "Do you like play cricket";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
console.log("----------------------------------");
// Q13-
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["Honda Motorcycle", "Honda City", "Kia Sportage"];
transportation.map((items) => console.log(`I would like to own a ${items}`));
console.log("----------------------------------");
// Q14-
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people
//  you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest = ["Hassam", "Hasnain", "Yasir"];
Guest.map((items) => (console.log(`Dear ${items} , You are invited to the dinner`)));
console.log("----------------------------------");
// Q15-
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guests1 = ["Hassam", "Hasnain", "Yasir"];
let canNotAttend = "Hassam";
console.log(canNotAttend + "", "can not attend the dinner.");
let newGuest = "Idrees";
guests1[guests1.indexOf(canNotAttend)] = newGuest;
console.log(guests1);
guests1.map((items) => (console.log(`Dear ${items}, You are invited to the dinner`)));
console.log("----------------------------------");
// Q16-
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner
//  table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// part 1
let guests = ["Idrees", "Hassam", "Hasnain", "Yasir"];
guests.map((items) => (console.log(`dear ${items}, "Great news! I have found a bigger dinner table".`)));
//part 2
let guestBeg = "Mustafa";
guests.unshift(guestBeg);
console.log(guests);
//part 3
let middleGuest = "Rabeel";
let MiddleIndex = guests.length / 2;
guests.splice(MiddleIndex, 0, middleGuest);
console.log(guests);
//part 4
guests.push("Abdul Rafey");
console.log(guests);
//part 5
guests.map((items) => console.log(`"dear ${items}, you are coodially invited on bigger dinner table." `));
console.log("----------------------------------");
// Q17-
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only
//  two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the 
// end of your program.
//informing that only two people can be invited on dinner
let guest = ['Mustafa', 'Idrees', 'Hassam', 'Hasnain', 'Yasir'];
console.log("Due to limited space, only two people can be invited for dinner.");
//remove guests until two guests remain
while (guest.length > 2) {
    const removeguest = guest.pop();
    console.log(`Sorry, ${removeguest}, you're no longer invited to dinner.`);
}
;
//printing invitation to the remaining two guests
guest.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
//removing ames the last two names from the list
guest.pop();
guest.pop();
//printing the fiinal list to confirm it's empty
console.log("Final guests list:", guest);
console.log("----------------------------------");
// Q18-
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//• Store the locations in a array:
let placesToVisit = ["Uae", "Turkey", "England", "Switzerland", "America"];
// Print your array in its original order:
console.log("Original order:", placesToVisit);
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [...placesToVisit].sort());
// • Show that your array is still in its original order by printing it.
console.log("Original order after sorting:", placesToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetic order:", [...placesToVisit].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("original order after reverse sorting:", placesToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed order:", [...placesToVisit].reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to the original order:", placesToVisit);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("sorted in alphabetic order:", [...placesToVisit].sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("sorted in reverse alphabetic order:", [...placesToVisit].sort().reverse());
console.log("----------------------------------");
// Q19-
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are 
// inviting to dinner.
let invitations = ["Mustafa", "Idrees"];
let count_invitations = invitations.length;
console.log(`${count_invitations}, people will come to the dinner`);
console.log("----------------------------------");
// Q20-
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
//  or anything else you’d like. Write a program that creates a list containing these items.
let languages = ["urdu", "English", "spanish", "chinese", "French"];
console.log("languages spoken in the world:");
console.log(languages);
