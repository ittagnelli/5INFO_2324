function genera() {
    let caratt = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let lunghezzaArray = 7;
    let risultato = [];
    
    for (let i = 0; i < lunghezzaArray; i++) {
      
        let index = Math.floor(Math.random() * caratt.length);

        risultato.push(caratt[index]);
    }
    
    return risultato;
}


let caratteriCasuali = genera();
console.log(caratteriCasuali); 
