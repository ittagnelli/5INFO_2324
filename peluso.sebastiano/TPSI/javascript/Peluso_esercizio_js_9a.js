

let utente = {
    "nome": "Mario",
    "cognome": "Rossi"
  }

  let chiavi = Object.keys(utente);

  


  for(let chiave = 0; chiave < chiavi.length; chiave++) {
    console.log(`chiave => ${chiavi[chiave]}\nvalue => ${utente[chiavi[chiave]]}\n`);
}

