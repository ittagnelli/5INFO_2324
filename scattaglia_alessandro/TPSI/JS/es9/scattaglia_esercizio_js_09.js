let user = prompt("USERNAME");
let password;
user || alert("Canceled");
user == null || user == "Admin" || alert("Idky");

user == "Admin" && (password = prompt("PASSWORD"));
password || alert("Canceled");
password == null || password == "Agnell1no" || alert("Wrong password");
password == "Agnell1no" && alert("Welcome");