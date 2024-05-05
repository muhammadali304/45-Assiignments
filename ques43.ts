// Taking code from task 41
function show_magicians(magicians : string[]) {
    for (let magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
    }
}

// 43 task

function make_great(magicians : string[]) : string[] {
    const greatMagicians : string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " " + `the Great`)
    }
    return greatMagicians;
}
const magicians : string[] = ["Ali", "Wajahat", "Bilal"]
const greatMagicians : string[] = make_great(magicians)
show_magicians(magicians);
show_magicians(greatMagicians)