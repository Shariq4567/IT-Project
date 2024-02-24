
let array = ["Ketchup", "Pepperoni", "no Mustard", "Toasted"];
let array2 = ["Ketchup", "Pepperoni", "no Mustard", "Toasted", "Extra Chicken", "No salsa"];
let array3 = ["Ketchup", "Pepperoni"];

function order(items:any) {
    for(let i of items) {
        console.log(i)
    }
}
order(array);
console.log("")
order(array2);
console.log("")
order(array3);