

let utente = {
    "nome": "Mario",
    "cognome": "Rossi"
  }

  let chiavi = Object.keys(utente);

  


  for(let chiave = 0; chiave < chiavi.length; chiave++) {

    let key = chiavi[chiave];
    let value = utente[key];

    console.log(`chiave : ${key} value : ${value}\n`);
}

