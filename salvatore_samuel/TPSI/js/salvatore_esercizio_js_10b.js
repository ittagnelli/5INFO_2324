function protect_email(email){
    let cognome = email.slice(email.indexOf("."), email.indexOf("@"));
    email = email.replace((cognome), " ...");
    return email;
}
console.log(protect_email("samuel.salvatore@istitutoagnelli.it"));
console.log(protect_email("marco.salvatore@istitutoagnelli.it"));
console.log(protect_email("gioele.mari@istitutoagnelli.it"));