function compara(a1, a2){
    for(let i=0;i<a1.length;i++){
        if(a1[i]!=a2[i]){
            return false;
        }
    }
    return true;
}

let array_1=[1,2,3];
let array_2=[1,2,3];
console.log(compara(array_1, array_2));