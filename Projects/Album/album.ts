function makeAlbum(name: string, title: string) {
    let obj = {
        "Artist-Name": name,
        "Album-Title": title,
    }
    return obj;
}

let Album1 = makeAlbum("Atif", "Aadat");
let Album2 = makeAlbum("Arijit", "Tum Hi Ho");
let Album3 = makeAlbum("Ed Sheeran", "Perfect");
console.log(Album1);
console.log(Album2);
console.log(Album3);