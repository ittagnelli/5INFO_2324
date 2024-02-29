
let array = [1, 2, 3, 1, 2, 4];

function eliminaDuplicati(array) {

    let arraysenzaduplicati = [];



    array.forEach(element => { 

        if (!arraysenzaduplicati.includes(element)) {
            
            arraysenzaduplicati.push(element);
        }
        
    });

    return arraysenzaduplicati;
}

console.log("OUT ", eliminaDuplicati(array));