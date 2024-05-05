// Task 24 
var name1 = "Muhammad";
var name2 = "Ali";
var name3 = "Yousuf";
if (name1 == name3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name1 != name2) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
var age1 = 18;
var age2 = 22;
if (age1 == 18) {
    console.log("Eligible for vote");
}
if (age1 != 22) {
    console.log("Eligible for vote in older category");
}
if (age1 <= age2) { // Less 
    console.log("Younger");
}
if (age2 <= age1) { // Greater
    console.log("Older");
}
if (age1 == 18 && age2 == 22) {
    console.log("Person is eligibe for vote");
}
if (age1 == 18 || age2 != 22) {
    console.log("Person is not eligibe for vote");
}
var country = ["Pakistan", "India", "China", "Srilanka"];
if (country.includes("Pakistan")) {
    console.log("Pakistan is in country list");
}
var country1 = ["Pakistan", "India", "China", "Srilanka", "japan"];
if (!country1.includes("America")) {
    console.log("America is not in country list");
}
