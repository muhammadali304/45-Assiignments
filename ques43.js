// Taking code from task 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// 43 task
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " " + "the Great");
    }
    return greatMagicians;
}
var magicians = ["Ali", "Wajahat", "Bilal"];
var greatMagicians = make_great(magicians);
show_magicians(magicians);
show_magicians(greatMagicians);
