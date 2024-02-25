

let Automobile=function(modello,marca,targa,prezzo,colore){
    (this.modello=modello),
    (this.marca=marca),
    (this.targa=targa),
    (this.prezzo=prezzo),
    (this.colore=colore),
    (this.speak = function info(){
            console.log(`Il modello e ${this.modello} La marca e ${this.marca} La targa e ${this.targa} Il prezzo e ${this.prezzo} Il colore e ${this.colore}`);
    });

};

let auto1=new Automobile("Ypsilon", "Lancia", "AA000BB","1000" ,"Nero");
let auto2=new Automobile("500", "Fiat", "AB000CC","2000", "Bianco");
let auto3=new Automobile("A8", "Audi", "DD000BV","3000", "Giallo");

auto1.speak();
auto2.speak();
auto3.speak();