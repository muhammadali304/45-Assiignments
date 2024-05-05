// //Task 16  Part 1
let guestArr : string[] = ["Mudassir", "Umer", "Ahmed"];

let canNotAttend : string = "Mudassir"

let newGuest : string = "Wajahat"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

guestArr.map((items) =>
console.log(`Dear ${items}, I found a bigger dining table so I invited more peoples`)
);

// Part 2
let guestBeg : string = "Moiz"
guestArr.unshift(guestBeg);
console.log(guestArr)

// Part 3
let middleGuest : string = "Abdullah"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr)

//Part 4
guestArr.push("Fatima")
console.log(guestArr)

//Task 5
guestArr.map((items) =>
console.log(`Dear ${items}, you are invited in the more people list of dinner.`)
);
