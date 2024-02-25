const string = "andrea.canale@istitutoagnelli.it";

function protect_email(email) {
    let sec = email.split("@")[0].split(".")[1];
    return email.replace(sec, "..");
}

console.log(protect_email(string));
