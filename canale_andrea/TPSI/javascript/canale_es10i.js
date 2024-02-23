function search(str, substr1, substr2) {
    return str.indexOf(substr1) != -1 && str.indexOf(substr2) != -1 ? str : "parole non trovate";
}

console.log(search("Coding Creativo", "Coding", "Creativo"));
