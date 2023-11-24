let user = prompt("Username:"); 
let password = prompt("Password:");

// non è stato inserito nulla
user || alert("Cancelled");
password || alert("Cancelled");

// confronto quello che ha inserito l'utente
user == "" || user == "Admin" || alert(`Non ti conosco ${user}`);
password == "" || password == "Agnell1no" || alert(`Password sbagliata ${password}`);

user == "Admin" && password;
password == "Agnell1no" && alert("Benvenuto");