var personName = "ALI YouSuf";
// in lowercase
personName = personName.toLowerCase();
console.log(personName);
// in UPPERCASE
personName = personName.toUpperCase();
console.log(personName);
// in TitleCase
function toTitleCase(str) {
    var words = str.split(" ");
    var finalString = "";
    console.log("Words:", words);
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        console.log(word);
        var firstCharInUpperCase = str.charAt(0).toUpperCase();
        console.log("firstCharInUpperCase:", firstCharInUpperCase);
        var charsInlowerCase = word.slice(1).toLowerCase();
        console.log("charInLowerCase:", charsInlowerCase);
        var titleCaseString = firstCharInUpperCase + charsInlowerCase;
        finalString += titleCaseString + " ";
    }
    return finalString;
}
personName = toTitleCase(personName);
console.log(personName);
