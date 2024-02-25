let frase = "supercalifragilistichespiralidoso";

function charactersUnique(frase){
    let char = new Set();
    let vet = [];

    for (const letter of frase) {
        if(!char.has(letter)){
            char.add(letter);
            vet.push(letter)
        }
    }

    let string = vet.join('');

    return string;
}

let newFrase = charactersUnique(frase);
console.log(newFrase)