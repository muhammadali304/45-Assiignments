// //Task 16  Part 1
var guestArr = ["Mudassir", "Umer", "Ahmed"];
var canNotAttend = "Mudassir";
var newGuest = "Wajahat";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", I found a bigger dining table so I invited more peoples"));
});
// Part 2
var guestBeg = "Moiz";
guestArr.unshift(guestBeg);
console.log(guestArr);
// Part 3
var middleGuest = "Abdullah";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
//Part 4
guestArr.push("Fatima");
console.log(guestArr);
//Task 5
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited in the more people list of dinner."));
});
