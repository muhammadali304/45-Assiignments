function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = '"I love Typescript."'; }
    console.log("You have ordered a ".concat(size, " shirt that says ").concat(message));
}
make_shirt();
make_shirt("medium");
// Different message shirt
make_shirt("small", '"Hello World!"');
