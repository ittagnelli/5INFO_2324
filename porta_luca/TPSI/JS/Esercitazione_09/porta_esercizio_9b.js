let Automobile=function(targa, marcia, motore, ruote, persone){
    (this.targa=targa),
    (this.marcia=marcia),
    (this.motore=motore),
    (this.ruote=ruote),
    (this.persone=persone),
    (this.speak=function(){
        console.log(`${this.targa} ${this.marcia} ${this.motore} ${this.ruote} ${this.persone}`);
    });
}
let auto1= new Automobile('1','6','benzina','avanti','8');
let auto2= new Automobile('2','5','elettrico','dietro','6');
let auto3= new Automobile('3','4','diesel','entrambe','5');
for(let auto of [auto1, auto2, auto3]){
    auto.speak()
}