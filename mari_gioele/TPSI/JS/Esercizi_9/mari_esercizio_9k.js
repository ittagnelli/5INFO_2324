let Automobile=function(persone, velocita, rapporto, accensione){
    if(persone>=0 && persone<=5){
        this.persone=persone;
    }
    if(velocita>=0 && velocita<=180){
        this.velocita=velocita;
    }
    if(rapporto>=1 && rapporto<=6){
        this.rapporto=rapporto;
    }
    if(this.persone==undefined || this.velocita==undefined || this.rapporto==undefined){
        console.log('Parametri non validi');
    }
    else if(accensione==true){
        this.speak=function(){
            console.log(`La macchina può contenere ${this.persone} persone e sta andando alla velocità di ${this.velocita}Km/h in ${this.rapporto}^ marcia`);
        }
    }
    else{
        this.speak=function(){
            console.log(`La macchina può contenere ${this.persone} persone ed è spenta`);
        }
    }
}

let a1=new Automobile(4, 30, 2, false);
a1.speak();