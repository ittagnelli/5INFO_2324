// Supponiamo di avere l'oggetto utente
var utente = {
    nome: 'John',
    cognome: 'Doe',
    età: 30
  };
  
  // Ottenere un array delle chiavi dell'oggetto
  var chiavi = Object.keys(utente);
  
  // Iterare sull'array delle chiavi con un ciclo for
  for (var i = 0; i < chiavi.length; i++) {
    var chiave = chiavi[i];
    var valore = utente[chiave];
    console.log(chiave + ': ' + valore);
  }
  