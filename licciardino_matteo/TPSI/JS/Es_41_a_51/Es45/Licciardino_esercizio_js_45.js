// cattura l'oggetto DOM del form
let form = document.getElementById("modulo");
let invia = document.getElementById("invia");

document.addEventListener("DOMContentLoaded", function() {
    // aggiunge un handler all'evento submit del form
    // in modo da inibire il normale funzionamento (invio del form verso il server)
    form.addEventListener("submit", function(e) {
        e.preventDefault();
    });

    invia.addEventListener("click", () => {
        process_form(); 
    });

    // funzione per processare il form
    function process_form() {
        console.log("process form");

        // cattura il form tramite la variabile precedentemente dichiarata
        let form = document.getElementById('modulo');

        // ottieni i valori dai campi del form
        let name = form.elements["nome"].value;
        let username = form.elements["cognome"].value;
        let year = form.elements["età"].value;
        let colors = form.elements["capelli"].value;

        // crea un nuovo utente con i valori inseriti nel form
        let user = new User(name, username, year, colors);

        // descrivi l'utente
        user.describe();
    }
});

class User {
    constructor(nome, cognome, età, colore) {
        this.nome = nome;
        this.cognome = cognome;
        this.età = età;
        this.colore = colore;
    }

    describe() {
        console.log(`Ciao, io sono l'utente ${this.nome} ${this.cognome} di anni ${this.età} e con i capelli ${this.colore}`);
    }
}
