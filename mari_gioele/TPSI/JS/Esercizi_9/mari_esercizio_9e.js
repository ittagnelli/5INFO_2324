let Orario=function(h,m,s,ms){
    (this.h=h),
    (this.m=m),
    (this.s=s),
    (this.ms=ms);
}
let h1 = new Orario(10,20,0,35);
let h2 = new Orario(5,10,0,35);

calcola(h1.h, h2.h);
calcola(h1.m, h2.m);
calcola(h1.s, h2.s);
calcola(h1.ms, h2.ms);

function calcola(h1,h2){
    let r=h1-h2;
    if(r<0){r*=-1;}
    console.log(r);
}