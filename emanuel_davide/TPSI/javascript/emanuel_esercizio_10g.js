let stringa="Ciao Mondo";
function Capitalize_All(stringa){
    let lettere=stringa.split(' ');

    for(let i=0;i<lettere.length;i++){
        let primaLettera=lettere[i].charAt(0).toLowerCase();
        lettere[i]=primaLettera+lettere[i].substring(1).toUpperCase();
    }
    return lettere.join(" ");
   
}
console.log(Capitalize_All(stringa));