function ordina(lib){
    let ord = lib.sort((a,b) => b.title - a.title);
    console.log(ord);
}

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'The Final Book of The Hunger Games', libraryID: 3245}
];
ordina(library);