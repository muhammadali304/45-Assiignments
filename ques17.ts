//Task 17 Part 1
let guests : string[] = ["Mudassir", "Mustafa", "Umer", "Ahmed"];
// // Removing Guests until only two guests remain
while (guests.length > 2) {
    const removeGuest = guests.pop();
    console.log(`Sorry ${removeGuest}, you're no longer invited to dinner.`);
}

//Part 2
//Printing Invitation to the remaining two guests
guests.forEach((guests) =>{
    console.log(`Dear ${guests}, you're still invited to the dinner.`)
});

//Part3
//Removing the last two names from the list
guests.pop();
guests.pop();

// //Printing the final list to confirm it's empty
console.log("Final guest list:", guests)