let psw, user = prompt("Username:");

user ?? alert("Canceled");
(user != undefined && user != null && user != "Admin") && alert("I Don't know you");
(user != undefined && user != null && user == "Admin") && (psw = prompt("Password:"));

(user != undefined && user != null) && (psw ?? alert("Canceled"));
(psw != undefined && psw != null && psw != "Agnell1no") && alert("Wrong password");
(psw != undefined && psw != null && psw == "Agnell1no") && alert("Welcome");