let magicians = ["Shin Lim", "David Copperfield", "Matt Franco", "Trigg Watson", "Justin Williams"]

function showMagicians(magicians) {
    for(let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians) {
    magicians.forEach((magician) => {
        console.log(`The Great ${magician}`);
    });
}

makeGreat(magicians);