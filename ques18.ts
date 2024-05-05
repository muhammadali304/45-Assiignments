//Task 18
let countriesToVisit : string[] = ["Saudia Arabia", "Turkey", "Switzerland", "Canada", "Egypt"];

//Printing the array in its Original order
console.log("Original order:", countriesToVisit);

//Printing the array in Alphabeetic order
console.log("Alphabetic order:", (countriesToVisit).sort());

//Showing that the array is still in its original order
console.log("Original order after sorting", countriesToVisit);

//Print the array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order:", [countriesToVisit].sort().reverse());

//Show that the array is still in its original order by printing it again.
console.log("Original order after reverse sorting:", countriesToVisit);

//Reverse the order of the list
countriesToVisit.reverse()
console.log("Reversed order:", countriesToVisit);

//Reverse the order of your list again.
countriesToVisit.reverse();
console.log("Back to Original order:", countriesToVisit);

//Sort your array in alphabetical order.
countriesToVisit.sort();
console.log("Sorted in an alphabetical order:", countriesToVisit);

//Sort to change your array  in reverse alphabetical order.
countriesToVisit.sort((a , b)=> b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", countriesToVisit)