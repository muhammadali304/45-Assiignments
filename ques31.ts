let users : string [] = ["admin", "eric", "haseeb", "umer", "ahmed"]

if (users.length === 0) {
    console.log("We need to find some users.")
} else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?")
        } else {
            console.log(`Hello ${user}, thank you for loging in again`)
        }
    }
}

users = []
if (users.length === 0) {
    console.log("We need to find some users.")
}