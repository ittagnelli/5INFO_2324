let Automobile=function(ruote,marca,targa){
    (this.ruote=ruote),
    (this.marca=marca),
    (this.targa=targa),
    (this.enumera=function info(){
            console.log(`Le route sono ${ruote} La marca e ${marca} La targa e ${targa}`)
    })
    
};
let auto1=new Automobile("4", "Fiat", "AA000AA");
let auto2=new Automobile("4", "AUdi", "CZ348AK");
let auto3=new Automobile("4", "Bmw", "GA480XJ");

auto1.enumera();
auto2.enumera();
auto3.enumera();