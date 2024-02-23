
let array = [1,2,1,2,4,6,6,8];

function operazione(array) {

    let arraysenzaduplicati = new Set(array);

    arraysenzaduplicati = [...arraysenzaduplicati];

    

    return arraysenzaduplicati;
    
}

console.log(`IN [ ${array.join(", ")} ]`);

console.log("OUT elemento senza duplicati ",operazione(array));

