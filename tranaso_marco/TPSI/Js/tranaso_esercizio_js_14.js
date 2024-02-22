function sposta(array,n,m) {
    return array.splice(m,0,array.splice(n,1)[0]), array;
}

let array=[10,20,30,40,50]

let n=0;
let m=2;

console.log(sposta(array,n,m))