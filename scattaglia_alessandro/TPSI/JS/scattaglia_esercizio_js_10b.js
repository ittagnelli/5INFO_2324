function protect_email(str) {
  let prima = str.split("@");


  let seconda = prima[0].split(".");


  seconda[1] = "...";


  let terza = seconda + "@" + prima[1];
  
  console.log(terza.replaceAll(",", ""));
}

protect_email("stefano.moretti@istitutoagnelli.it");