function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = make_album("Ali", "Lights");
console.log(album);
album = make_album("Hamza", "Dark Nights");
console.log(album);
album = make_album("Abdullah", "Waves");
console.log(album);
