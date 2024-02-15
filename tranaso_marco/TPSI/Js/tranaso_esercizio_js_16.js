let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];
  
  let library_ordinata = library.sort((s1, s2) => {
    if (s1.title < s2.title) {
      return 1; 
  } else if (s1.title > s2.title) {
      return -1; 
  } else {
      return 0;
  }
  });
  
  console.log("Libreria ordinata in ordine decrescente", library_ordinata);