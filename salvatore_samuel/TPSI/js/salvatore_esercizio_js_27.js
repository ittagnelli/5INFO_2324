function rimuovi(array) {
    return array.filter((element, index, arr) => arr.indexOf(element) === index);    
}

let vett = [1, 2, 3, 1, 2, 4];
let vett2 = rimuovi(vett);
console.log(vett, " ", vett2);