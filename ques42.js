// Taking code from task 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// 42 modifying
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " " + "the great";
    }
}
var magicians2 = ["Ali", "Mudassir", "Mustafa"];
make_great(magicians2);
show_magicians(magicians2);
