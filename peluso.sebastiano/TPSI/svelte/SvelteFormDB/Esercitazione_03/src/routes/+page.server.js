

import Database from 'better-sqlite3';

const db = new Database('./USER.db');

/* const query1 = db.prepare("INSERT INTO Utente (nome,cognome,eta) VALUES(?,?,?)");
const info1 = query1.run("Mario", "Rossi", "19");
console.log(info1);

const query2 = db.prepare("INSERT INTO Utente (nome,cognome,eta) VALUES(?,?,?)");
const info2 = query2.run('Sebastiano', 'Peluso', 19);

console.log(info2);

const query3 = db.prepare("INSERT INTO Utente (nome,cognome,eta) VALUES(?,?,?)");
const info3 = query3.run('Luigi', 'Verdi', 16);

console.log(info3); */


const query4 = db.prepare("SELECT * FROM Utente WHERE eta > 18");
const ris = query4.all();

console.log(ris);


const query5 = db.prepare("SELECT * FROM Utente WHERE eta = 16");
const ris2 = query5.all();

console.log(ris2);

const query6 = db.prepare("UPDATE Utente SET nome=@nome, cognome=@cognome WHERE id=@id");
const ris_update = query6.run({id: 3, nome: 'Gianfranco', cognome: 'tiziano'});

console.log(ris_update);

const query7 = db.prepare("DELETE FROM Utente WHERE id= ?");
const info7 = query7.run(2);

console.log(info7);

