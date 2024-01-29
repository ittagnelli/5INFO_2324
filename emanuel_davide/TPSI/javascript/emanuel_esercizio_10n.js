let stringa="ciao";
let stringa2="bella";
let numero=2;
function insert(stringa,stringa2,numero){
    return stringa.slice(0,numero)+ " " + stringa2 + stringa.slice(numero);
}
console.log(insert(stringa,stringa2,numero));