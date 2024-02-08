

let orario = function (ore, minuto, secondi) {

    this.ore = ore;
    this.minuto=minuto;
    this.secondi = secondi;

        
}



function diffOrario(orario1, orario2) {

    let orario_diff = orario1.ore - orario2.ore;
    
    if (orario_diff < 0) {

        orario_diff = orario_diff*-1;
        
    }

    let minuti_diff = orario1.minuto - orario2.minuto;

    if (minuti_diff < 0) {

        minuti_diff = minuti_diff*-1;
        
    }

    let secondi_diff = orario1.secondi - orario2.secondi;

    if (secondi_diff < 0) {


        secondi_diff = secondi_diff*-1;
        
    }


    let orediff = orario_diff*60*60*1000;
    let minutidiff = minuti_diff*60*1000;
    let secondidiff = secondi_diff*1000;
    let millisecondidiff = orediff+minutidiff+secondidiff;

;
    
    orediff = orario_diff*60*60;
    minutidiff = minuti_diff*60;
    secondidiff = secondi_diff;

    let diffsecondi = orediff + minutidiff + secondidiff;

    let orarioFinito ={
        millsec: millisecondidiff,
        secsec: secondidiff,

    }

    return orarioFinito;

    
    
}

const main = () => {

    let orario1 = new orario(10,20,10);
    let orario2 = new orario(20,10,8);

    console.log("orario ",diffOrario(orario1,orario2));
}

main();







