let magicians = ["Shin Lim", "David Copperfield", "Matt Franco", "Trigg Watson", "Justin Williams"];
let Copy = ["Shin Lim", "David Copperfield", "Matt Franco", "Trigg Watson", "Justin Williams"];
function showMagicians(magic:any) {
    for(let magician of magic) {
        console.log("The Great " + magician);
    }
}
function normal(magic:any) {
    for(let magician of magic) {
        console.log(magician);
    }
}
console.log(showMagicians(Copy));
console.log(normal(magicians));