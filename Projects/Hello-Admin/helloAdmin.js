
let array = ["shariq", "jack", "john", "admin", "ben"];
if(array.length > 0) {
    for (let user of array) {
        if(user === "admin") {
            console.log("Hello Admin, What changes would you like to make today?");
        } else {
            console.log(`Hello ${user}`)
        }
    }
} else {
    console.log("We need to find some users.");
}

