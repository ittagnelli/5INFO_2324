function protect_email(str) {
    let prima = str.split("@");
    let seconda = prima[0].slice(0, (prima[0].length / 2 ));
    let terza = seconda + "..." + "@" + prima[1]; 
  
    console.log(terza);
  }
  
  protect_email("marco.minetti@istitutoagnelli.it");