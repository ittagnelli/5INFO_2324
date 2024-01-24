const printAttr = (object) => {
    for(let attribute in object) {
        if(object.hasOwnProperty(attribute)){
            let value = object[attribute];
            let type = typeof value;

            if(type === "string") value = value.toLowerCase();

            console.log(`Nel oggetto abbiamo: \n Attributo: ${attribute}, Tipo: ${type}, Valore: ${value}`);
        }
    }
}

const main = () => {
    let oggetto = {
        nome: 'Benedetta',
        età: 20,
        città: 'Viterbo',
        salario: 50000,
        hobby: 'Pallavolo'
    };

    let oggetto2 = {
        titolo: 'Sostiene Pereira',
        autore: 'Antonio Tabucchi',
        pagine: 200,
        editore: 'Einuadi',
        lingua: 'Italiano'
    };

    let ris_1 = printAttr(oggetto);
    console.log(`${ris_1} \n`);

    let ris_2 = printAttr(oggetto2);
    console.log(`${ris_2}`);
}

main();