let stringa1="ciao";
let stringa2="skylander";

function PrendiStringa(stringa1,stringa2){
    let nuovaStringa=stringa2.substring(0,2)+stringa1.substring(2)
    let nuovaStringa2=stringa1.substring(0,2)+stringa2.substring(2)

    return nuovaStringa + " "+nuovaStringa2;

}
console.log(PrendiStringa(stringa1,stringa2));