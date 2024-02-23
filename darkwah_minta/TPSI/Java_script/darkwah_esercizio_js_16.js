let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
/* 
let mesi = ["Luglio", "Gennaio", "Marzo", "Febbraio"]
 */
console.log(library.sort((m1,m2) => m1.title < m2.title ? 1:-1))