let cambia_ordine= function(library)
{
     library= library.sort((l1, l2) => l1.title.localeCompare(l2.title));
    
     return library.reverse();
}
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

    console.log(cambia_ordine(library));