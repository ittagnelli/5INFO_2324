let stringa="ciao mondo la terra gira";
function Capitalize_All(stringa){
    let lettere=stringa.split(' ');

    for(let i=0;i<lettere.length;i++){
        let primaLettera=lettere[i].charAt(0).toUpperCase();
        lettere[i]=primaLettera+lettere[i].substring(1).toLowerCase();
    }
    return lettere.join(" ");
   
}
console.log(Capitalize_All(stringa));