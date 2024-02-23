function occorrenze(arr){
    let mappa=new Map(), a=0, e=0, i=0, o=0, u=0;
    for(item of arr){
        if(item=='a'){a++;}
        else if(item=='e'){e++;}
        else if(item=='i'){i++;}
        else if(item=='o'){o++;}
        else if(item=='u'){u++;}
    }
    mappa.set('a', a);
    mappa.set('e', e);
    mappa.set('i', i);
    mappa.set('o', o);
    mappa.set('u', u);
    console.log(mappa);
}

let str='supercalifragilistichespiralidoso';
occorrenze(str.split(''));