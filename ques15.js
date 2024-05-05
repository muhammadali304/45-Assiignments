//Task 15
var guestArr = ["Ali", "Umer", "Ahmed"];
var canNotAttend = "Ali";
// console.log(canNotAttend + " ", "can not attend the dinner")
var newGuest = "Mudassir";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner"));
});
