let Oggetto = function(num){
    (this.num=num);
}
let o1 = new Oggetto(5);
let o2 = new Oggetto(4);
let o3 = new Oggetto(3);
calcola(o1.num, o2.num, o3.num);
o1=new Oggetto(1);
o2=new Oggetto(10);
o3=new Oggetto(3);
calcola(o1.num, o2.num, o3.num);

function calcola(n1, n2, n3){
    if(n1<n2 && n1<n3){
        console.log(n1);
    }
    else if(n2<n1 && n2<n3){
        console.log(n2);
    }
    else if(n3<n1 && n3<n2){
        console.log(n3);
    }
    else{
        console.log('Alcuni numeri sono uguali');
    }
}