let Automobile = function (modello, marca, anno) {
    (this.modello = modello),
    (this.marca = marca),
    (this.anno = anno),

    (this.descrizione = function () {
        console.log(`Quest' auto è una ${this.modello} della marca ${this.marca}`);
    }),
    (this.auto = function () {
        console.log(`Quest' auto è una ${this.modello} del ${this.anno} della marca ${this.marca}`);
    }),
    (this.enumera = function () {
        let array = Object.keys(this);
        for(let i = 0; i < array.length; i++){
            console.log(`Uno delle chiavi è ${array[i]} `);
        }
    });
};

let automobile1 = new Automobile("Panda","FIAT","2006");
let automobile2 = new Automobile("Tiguan","WW","2011");

automobile1.enumera();
automobile2.enumera();