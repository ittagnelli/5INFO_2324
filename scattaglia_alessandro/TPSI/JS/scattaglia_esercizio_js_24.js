function genera() {
    let caratteriPossibili = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let lunghezzaArray = 7;
    let risultato = [];
    
    for (let i = 0; i < lunghezzaArray; i++) {
      
        let indiceCasuale = Math.floor(Math.random() * caratteriPossibili.length);

        risultato.push(caratteriPossibili[indiceCasuale]);
    }
    
    return risultato;
}


let caratteriCasuali = genera();
console.log(caratteriCasuali); 
