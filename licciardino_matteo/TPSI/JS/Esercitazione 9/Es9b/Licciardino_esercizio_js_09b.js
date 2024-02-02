let Automobile = {
    marca: "",
    modello: "",
    anno: 0,
    colore: "",
    Km_percorsi: 0,

    viewInforma: function(){
        console.log(`Automobile 
        con la marca: ${this.marca}, 
        con il modello: ${this.modello}, 
        con l'anno: ${this.anno}, 
        con il colore: ${this.colore},
        con i Km percorsi: ${this.Km_percorsi}`);
    },

    walk: function(distance){
        this.Km_percorsi += distance;
        console.log(`Hai percorso ${distance} km. Hai percorso nuovamente questi ${this.Km_percorsi} km.`);
    },

    maintenance: function(){
        console.log("Manutenzione in corso...");

        // Simula la logica della manutenzione
        console.log("Sostituzione olio e filtri...");
        console.log("Controllo del sistema frenante...");
        console.log("Verifica dello stato delle gomme...");
        
        // Reimposta il Km_percorsi a zero
        this.Km_percorsi = 0;
      
        console.log("Manutenzione completata! Chilometraggio reimpostato a zero.");
    }
}

let auto_1 = Object.create(Automobile);
auto_1.marca = "Toyota";
auto_1.modello = "Corolla";
auto_1.anno = 2022;
auto_1.colore = "Blu";
auto_1.Km_percorsi = 15000;

let auto_2 = Object.create(Automobile);
auto_2.marca = "Honda";
auto_2.modello = "Civic";
auto_2.anno = 2021;
auto_2.colore = "Rosso";
auto_2.Km_percorsi = 20000;

let auto_3 = Object.create(Automobile);
auto_3.marca = "Ford";
auto_3.modello = "Focus";
auto_3.anno = 2020;
auto_3.colore = "Nero";
auto_3.Km_percorsi = 18000;

let auto_4 = Object.create(Automobile);
auto_4.marca = "Chevrolet";
auto_4.modello = "Malibu";
auto_4.anno = 2019;
auto_4.colore = "Argento";
auto_4.Km_percorsi = 25000;

let auto_5 = Object.create(Automobile);
auto_5.marca = "Volkswagen";
auto_5.modello = "Jetta";
auto_5.anno = 2023;
auto_5.colore = "Bianco";
auto_5.Km_percorsi = 12000;

auto_1.viewInforma();
auto_1.walk(100);
auto_1.maintenance();

auto_2.viewInforma();
auto_2.walk(150);
auto_2.maintenance();

auto_3.viewInforma();
auto_3.walk(80);
auto_3.maintenance();

auto_4.viewInforma();
auto_4.walk(120);
auto_4.maintenance();

auto_5.viewInforma();
auto_5.walk(200);
auto_5.maintenance();