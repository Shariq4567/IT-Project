let guests = ["Hanif", "Danish", "Shahmir"];
guests.forEach((val) => {
    console.log(`${val}, please join us on dinner.`);
});

console.log("");  //Just for clarity

let newGuest = "Talha";

guests.splice(0, 1, newGuest);
guests.forEach((val) => {
    console.log(`${val}, please join us on dinner.`);
});

console.log("");
console.log("We now have more space on the dinner table.");
console.log("")

guests.splice(0, 0, "Daniyal");
guests.splice(2, 0, "Ali");
guests.splice(6, 0, "Sufiyan");

guests.forEach((guest) => {
    console.log(`Please join us on dinner mr.${guest}`);
});

console.log(guests.length)

console.log("");
console.log("Sorry for your inconvenience but the Dinner table won't arrive on time only 2 people can come.");
console.log("");

let i = 0
while(true) {
    let cancGuest;
    cancGuest = guests.shift();
    console.log(`Sorry mr.${cancGuest} you weren't invited`);
    i++;
    if(i == 4) {
        break
    }
}

console.log("")
guests.forEach((guest) => {
    console.log(`You are still invited mr.${guest}`);
});

guests.splice(0, guests.length);

console.log("");
console.log(guests);