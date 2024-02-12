const ordina = (l) => {
    return l.sort((a, b) => b.title.toLowerCase().charCodeAt() - a.title.toLowerCase().charCodeAt());
};

let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];
console.log(`IN: \n${JSON.stringify(library, null, " ")}\n\nOUT: \n${JSON.stringify(ordina(library), null, " ")}`);