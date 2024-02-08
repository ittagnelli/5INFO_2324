let utente = {
    nome: "Alessandro",
    cognome: "Scattaglia",
    anni: 30
}

var chiaveOggetto = Object.keys(utente);
for (var i = 0; i < chiaveOggetto.length; i++) 
{

    var chiave = chiaveOggetto[i];
    var valore = utente[chiave];

    console.log("La chiave '" + chiave + "' ha il valore: '" + valore +"'");

}