let enumera= function() {
    console.log(Object.keys(this));

}

let Automobili= function( targa, propietario, prezzo){
    (this.targa=targa),
    (this.propietario=propietario),
    (this.prezzo=prezzo),
    (this.sconto= function() {
        prezzo /= 5;
        console.log(`Prezzo: ${this.prezzo} `);
    }),
    (this.aumento= function() {        
        prezzo *= 4;
        console.log(`Prezzo: ${this.prezzo} `);

        
    }),

    (this.enumera = enumera)
    
};

let Animale= function(specie, nome_scientifico, sesso)
{
    (this.specie=specie),
    (this.nome_scientifico=nome_scientifico),
    (this.sesso=sesso),
    (this.tipo= function() {
        console.log(`Il nome scientifico di ${this.specie} è ${nome_scientifico} `);
    }),
    (this.recinto= function() {
        console.log(`Va nel recinto dei ${this.specie} `);
    }),
    (this.enumera=enumera)

    

};


let auto1= new Automobili("500", "MRRTOKJIKFD34", "Amort Giorgio", "verde", 400);
auto1.enumera(auto1);
let auto2= new Automobili("Tesla", "KJMHGFV5678", "Amort Tina", "rosso", 96);
auto2.enumera(auto2)