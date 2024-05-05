let current_users : string[] = ["Eric", "john", "Ali", "ahmed", "Mustafa"]
let new_users : string[] = ["Mudassir", "Hamza", "ahmed", "john", "Umer"]

let current_users_lower : string[] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is already taken.`)
    } else {
        console.log(`Yes ${new_user}, is still available.`)
    }
}