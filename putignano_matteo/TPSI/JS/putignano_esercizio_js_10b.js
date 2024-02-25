let email = "matteo.putignano@istitutoagnelli.it"

const protect_email = function(str){
    let spl_chiocc = str.split('@');
    let offuscato = spl_chiocc[0].length / 2;
    let user_off = spl_chiocc[0].substring(0 , offuscato);
    return(user_off.concat("...@",spl_chiocc[1]));
}

console.log(protect_email(email));