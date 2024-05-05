function sandwich(...items : string[]) : void {
    console.log("Sandwich Order:")
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

sandwich("Cucumber", "Egg")
sandwich("Capcicum", "Cheese")
sandwich("Beef", "Capcicum", "Mayo Sauce")
