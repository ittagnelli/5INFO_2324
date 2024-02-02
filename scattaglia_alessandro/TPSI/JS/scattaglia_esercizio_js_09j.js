const prodotto1 = {
    nome: 'alessandro',
    cognome: 'scattaglia',
    età: 18,
    altezza: 175,
    professione: 'studentE'
};

for (let attributo in prodotto1) {
    let valore = prodotto1[attributo];
    let tipo = typeof valore;
    let valoreStampato = valore;

    if (tipo === 'string') {
        valoreStampato = valore.toLowerCase();
    }

    console.log(`Attributo: ${attributo}`);
    console.log(`Tipo: ${tipo}`);
    console.log(`Valore: ${valoreStampato}`);
    console.log('-------------------');
}
