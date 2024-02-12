let user = prompt("USERNAME");
let password;
user || alert("Canceled");
user == null || user == false || user == "Admin" || alert("Idky");

user == "Admin" && (password = prompt("PASSWORD"));
password || alert("Canceled");
password == null || password == false || password == "Agnell1no" || alert("Wrong password");
password == "Agnell1no" && alert("Welcome");