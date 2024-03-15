class Calcolatrice{
    constructor(n)
    {
        this.n=n;

    }

    set(n)
    {
        this.n=n;
    }

    get()
    {
        return this.n;
    }


    addizione(op){ 
        this.n+=op
        return this;
    }

    sottrazione(op){
        this.n-=op

        return this;
    }

    moltiplicazione(op){
        this.n*=op

        return this;
    }
    divisione(op){
        this.n/=op

        return this;
    }
    
}

let n1= new Calcolatrice();
n1.n=5;
let ris= n1.addizione(3).sottrazione(2).addizione(4).moltiplicazione(5).sottrazione(2).divisione(2);
console.log(`5+3-2+4*5-2/2=${ris.n}`);



let n2= new Calcolatrice();
n2.n=6;
let ris2= n2.sottrazione(2).moltiplicazione(5).addizione(8).divisione(4);
console.log(`6-2*5+8/4=${ris2.n}`);

let n3=new Calcolatrice();
n3.n=11;
let ris3=n3.moltiplicazione(3).addizione(5).sottrazione(5).divisione(11);
console.log(`11*3+5-5/11=${ris3.n}`);

let n4=new Calcolatrice();
n3.n=29;
let ris4=n4.addizione(2).sottrazione(7).divisione(3).divisione(2).addizione(1).moltiplicazione(2)
console.log(`29+2-7/3/2+1*2=${ris4.n}`);

