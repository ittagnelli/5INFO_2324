
let speed =0;

let aperta = false;


   let Automobile = function(modello, marca, targa, potenza, anno) {

    this.modello=modello,
    this.marca=marca,
    this.targa=targa,
    this.potenza = potenza,
    this.anno = anno,


    this.accellera = () => speed++;
    this.frena = () => speed--;

    this.portiera = () => open != open;

    (this.speak = function () {
        console.log(`L'Automobile :  ${this.modello} ${this.marca}`);
      });


};


let panda = new Automobile("panda","fiat","ef458tr","5000","2002");
let stilo = new Automobile("stilo","fiat","ff468yt","4000","2008");
let cinquecento = new Automobile("500","fiat","ed458wr","3000","2020");
let fiesta = new Automobile("fiesta","ford","gf438te","6000","2023");
let corolla = new Automobile("corolla","toyota","et348ur","8000","2010");


panda.accellera();
stilo.frena();
cinquecento.portiera();
corolla.accellera();

fiesta.frena();
cinquecento.frena();
stilo.portiera();
