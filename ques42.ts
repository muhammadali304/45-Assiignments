// Taking code from task 41
function show_magicians(magicians : string[]) {
    for (let magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
    }
}
// 42 modifying
function make_great(magicians : string[]) : void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " " + `the great`
    }
}
const magicians2 : string[] = ["Ali", "Mudassir", "Mustafa"]
make_great(magicians2)

show_magicians(magicians2)