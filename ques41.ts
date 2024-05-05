function show_magicians(magicians : string[]) {
    for (let magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
    }
}
let magician : string[] = ["Ali", "Hamza", "Ahmed"]
show_magicians(magician)