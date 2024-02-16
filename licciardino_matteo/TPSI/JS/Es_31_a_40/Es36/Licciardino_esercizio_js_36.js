let frase = "supercalifragilistichespiralidoso";

function countVocali(frase){
    let count = new Map();

    let vocali = ['a', 'e', 'i', 'o', 'u'];

    for (let char of frase) {
        if(vocali.includes(char)){
            if(count.has(char)){
                count.set(char, count.get(char) + 1)
            } else {
                count.set(char, 1)
            }
        }
    }

    return count;
}

let countChar = countVocali(frase);
console.log(countChar);