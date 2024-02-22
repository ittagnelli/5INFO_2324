let binario_decimale=function(binario){
    let array=binario.split('').map(Number).reverse();
    let decimale=array.reduce((acc, current, i) => acc + current * Math.pow(2, i), 0 );
    return decimale;
}


let binario="100110";
console.log(binario_decimale(binario));