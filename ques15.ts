//Task 15
let guestArr : string[] = ["Ali", "Umer", "Ahmed"];
let canNotAttend : string = "Ali"

// console.log(canNotAttend + " ", "can not attend the dinner")

let newGuest : string = "Mudassir"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;

// console.log(guestArr)

guestArr.map((items) =>
console.log(`Dear ${items}, you are invited to the dinner`)
)