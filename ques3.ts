let personName: string = "ALI YouSuf";

// in lowercase
personName = personName.toLowerCase()
console.log(personName)

// in UPPERCASE
personName = personName.toUpperCase()
console.log(personName)

// in TitleCase
function toTitleCase(str : string) {
    const words = str.split(" ")
    let finalString : string = ""
    console.log("Words:", words)

    for(let i=0; i < words.length; i++) {
        let word = words[i]
        console.log(word)

        const firstCharInUpperCase = str.charAt(0).toUpperCase()
        console.log("firstCharInUpperCase:" , firstCharInUpperCase)
    
        const charsInlowerCase: string = word.slice(1).toLowerCase();
        console.log("charInLowerCase:" , charsInlowerCase)
        const titleCaseString = firstCharInUpperCase + charsInlowerCase;

        finalString += titleCaseString + " ";
    } 
    return finalString;
}
personName = toTitleCase(personName);
console.log(personName);