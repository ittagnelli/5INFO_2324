function concat(str1,str2)
{
    let prefissoStr1=str1.substring(0,2);
    let prefissoStr2=str2.substring(0,2);
let risultato=prefissoStr2 + str1.substring(2)+ " "+ prefissoStr1 + str2.substring(2);


return risultato;
}
let stringa1="cane";
let stringa2="gatto";
let risultato=concat(stringa1,stringa2);
console.log(risultato);