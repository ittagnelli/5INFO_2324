class Orario{
    constructor(secondi, minuti, ore)
    {
        this.secondi=secondi;
        this.minuti=minuti;
        this.ore=ore;

    }

    differenza(orario)
    {

        let mills1=(this.ore*3600 + this.minuti*60+ this.secondi)*1000;
        let mills2=(orario.ore*3600 + orario.minuti*60+ orario.secondi)*1000;
        let diffms=Math.abs(mills1-mills2);
        let diffsec=diffms/1000;
        let diffminuti=diffsec/60;
        let diffore=diffminuti/60;

        return{diffms, diffsec, diffminuti, diffore};

    }
}

let or1= new Orario(18, 18, 16);
let or2=new Orario(5, 7, 14);

let diff=or1.differenza(or2);


console.log("Differenza in millisecondi:", diff.diffms);
  console.log("Differenza in secondi:", diff.diffsec);
  console.log("Differenza in minuti:", diff.diffminuti);
  console.log("Differenza in ore:", diff.diffore);


  let or3= new Orario(25, 26, 13);
let or4=new Orario(50, 13, 5);

let diff2=or3.differenza(or4);


console.log("Differenza in millisecondi:", diff2.diffms);
  console.log("Differenza in secondi:", diff2.diffsec);
  console.log("Differenza in minuti:", diff2.diffminuti);
  console.log("Differenza in ore:", diff2.diffore);