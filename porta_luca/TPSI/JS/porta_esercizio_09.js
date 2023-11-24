let password, nome=prompt("NOME");
nome || alert("Cancellato");
nome==false ||nome==null || nome=="Admin" || alert("Non ti conosco");
nome=="Admin" && (password=prompt("PASSWORD"));
password==null || alert("Cancellata");
password==null || password==false || password=="Agnell1no" || alert("Password sbagliata");
password=="Agnell1no" && alert("Benvenuto");