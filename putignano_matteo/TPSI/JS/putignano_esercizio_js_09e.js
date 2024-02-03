let ora_uscita = new Date(2024, 0, 29, 13, 50, 0, 0);


const t_mancante = function(d1){
    let now = Date.now();
    let dm = d1.getTime();
    let differenza = dm-now;
    return(differenza);
};

let ms_manc = t_mancante(ora_uscita);
let s_manc = ms_manc/1000;
let m_manc = s_manc/60;
let o_manc = m_manc/60;
console.log(`All'uscita mancano ${ms_manc} millisecondi`);
console.log(`All'uscita mancano ${s_manc} secondi`);
console.log(`All'uscita mancano ${m_manc} minuti`);
console.log(`All'uscita mancano ${o_manc} ore`);