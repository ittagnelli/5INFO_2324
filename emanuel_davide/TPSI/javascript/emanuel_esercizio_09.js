function loginUser() {
    var username = prompt("Inserisci il tuo nome utente:");
    var password = prompt("Inserisci la tua password:");

    // Controlla se le credenziali sono corrette (puoi modificare questa logica a seconda delle tue esigenze)
    if (username === "utente" && password === "password") {
        alert("Accesso riuscito! Benvenuto, " + username + "!");
    } else {
        alert("Accesso non riuscito. Nome utente o password errati.");
    }
}

// Chiamato al caricamento della pagina
window.onload = function() {
    // Aggiungi un evento al clic del pulsante di login
    var loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", loginUser);
};
