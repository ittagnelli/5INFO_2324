


let library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Cockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

console.log(library.sort((t1, t2) => t2.title.toLocaleLowerCase().charCodeAt() - t1.title.toLocaleLowerCase().charCodeAt()));