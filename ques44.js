function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
sandwich("Cucumber", "Egg");
sandwich("Capcicum", "Cheese");
sandwich("Beef", "Capcicum", "Mayo Sauce");
