let Oggetto=function(a1, a2, a3, a4, a5){
    this.a1=a1;
    this.a2=a2;
    this.a3=a3;
    this.a4=a4;
    this.a5=a5;
}
let o1=new Oggetto(1,2,3,4,'CIAO');
trova(o1.a1);
trova(o1.a2);
trova(o1.a3);
trova(o1.a4);
trova(o1.a5);

o1=new Oggetto('Mario',5,6,7,'Rossi');
trova(o1.a1);
trova(o1.a2);
trova(o1.a3);
trova(o1.a4);
trova(o1.a5);

function trova(a){
    if(typeof(a)=='string'){a=a.toLowerCase();}
    console.log(typeof(a)+'\n'+a);
}