let user = prompt("Username");
user || alert("Calceled");
user == false || user == null || user == "Admin" || alert("I don't know you");

user == "Admin" && (password = prompt("Password"));
password || alert("Canceled");
password == false || password == null || password == "Agnell1no" || alert("Wrong Password");
password == "Agnell1no" && alert("Welcome");