

let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245},
    
];

function ordini(library) {

    return library.sort((a1,a2) => a1.title.toLowerCase().charCodeAt() + a2.title.toLowerCase().charCodeAt()  ) ;

    
}

console.log(ordini(library));