let  num=0, l=5, i=0;
while(i<l){
    calcola(num, i)
}
function calcola(num, i){
    if(num>1){
        num=(num-1)+(num-2);
        num*=i;
    }
    else{
        num++;
    }
    i++;
    console.log(num);
    return num, i;
}