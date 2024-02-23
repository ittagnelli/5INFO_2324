function setta(arr){
    let nuovo=new Set();
    for(item of arr){
        nuovo.add(item);
    }
    arr=[];
    let stringa='';
    nuovo.forEach(item=>{
        stringa+=item;
    });
    console.log(stringa);
}

let str='supercalifragilistichespiralidoso';
setta(str.split(''));