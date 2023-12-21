let Animale=function(tipo, eta, specie){
    this.tipo=tipo,
    this.eta=eta,
    this.specie=specie,
    this.enumera=function(){
        let chiave=Object.keys(this);
        for(var i=0;i<chiave.length;i++){
            console.log(`${chiave[i]}`);
        }
    }
}
let animale1= new Animale('leone',10, 'mammifero');
let animale2= new Animale('pinguino',53, 'oviparo');
animale1.enumera();
animale2.enumera();