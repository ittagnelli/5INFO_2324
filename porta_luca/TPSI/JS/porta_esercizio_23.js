function decimale(str){
    let num=0, i=0;
    str.reverse();
    for(item of str){
        num+=Number(item)*(2**i);
        i++;
    }
    console.log(num);
}

let str='101';
decimale(str.split(''));