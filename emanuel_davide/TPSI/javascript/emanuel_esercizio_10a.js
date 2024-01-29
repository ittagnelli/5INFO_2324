function abbreviaNomeCognome(inputString) {
  
    const [nome, cognome] = inputString.split(" ");
   
    if (!nome || !cognome) {
      return "Inserisci entrambi nome e cognome";
    }
    const abbreviazione = `${nome} ${cognome.charAt(0).toUpperCase()}`;
  
    return abbreviazione;
  }
  const inputString = "Mario Rossi";
  const result = abbreviaNomeCognome(inputString);
  console.log(result); 
  