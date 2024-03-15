//processa il form quando l'utente preme submit

    // cattura l'oggetto DOM del form

let form=document.getElementById('modulo');
let invia=document.getElementById('invia');




// aggiunge un handler all'evento DOMContentLoaded
// che viene generato quando la pagina HTML ha terminato il suo caricamento
document.addEventListener("DOMContentLoaded", function() {


    //aggiunge un handler all'evento submit del form
    //in modo da inibire il normale funzionamento (invio del form verso il server)
    form_utente.addEventListener("submit", function(event) {
        event.preventDefault();
    });



    invia.addEventListener("click",()=>{process_form()});
    
    
    function process_form() {
        console.log("process form");

        let form=document.getElementById('modulo');

    
        let name=form.elements["name"].value;
        let cognome=form.elements["cognome"].value;
        let eta=form.elements["eta"].value;
        let capelli=form.elements["capelli"].value; 
    
    
        let user=new User(name, cognome, eta, capelli);
    
        user.descrivi();
      }
});




class User{
    constructor(nome, cognome, eta, capelli)
    {
        this.nome=nome;
        this.cognome=cognome;
        this.eta=eta;
        this.capelli=capelli;
    }

    descrivi()
  {
    console.log(`Nome: ${this.nome}, Cognome: ${this.cognome}, eta: ${this.eta}, capelli: ${this.capelli}`);
  }
}








  