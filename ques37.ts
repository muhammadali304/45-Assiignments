function make_shirt(size : string = "large", message : string = '"I love Typescript."') {
    console.log(`You have ordered a ${size} shirt that says ${message}`)
}
make_shirt();
make_shirt("medium")

// Different message shirt
make_shirt("small", '"Hello World!"')