let array=[10,20,30,40,50];
indice=2;
posizione=1;
if(posizione < indice){
    array.splice(indice+1,0,array[posizione]);
    array.splice(posizione, 1);
}else{
    array.splice(indice, 0, array[posizione]);
    array.splice(posizione + 1, 1);
}
console.log(array);
