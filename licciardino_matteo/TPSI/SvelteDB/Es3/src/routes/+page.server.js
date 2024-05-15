import Database from 'better-sqlite3';

const db = new Database('./USER.db');

/*const query = db.prepare("INSERT INTO Utente (nome, cognome, eta) VALUES(?, ?, ?)");
const info = query.run("Matteo", "Licciardino", "19");
const query2 = db.prepare("INSERT INTO Utente (nome, cognome, eta) VALUES(?, ?, ?)");
const info2 = query2.run("Matteo", "Putignano", "18");
const query3 = db.prepare("INSERT INTO Utente (nome, cognome, eta) VALUES(?, ?, ?)");
const info3 = query3.run("Matteo", "Asti", "18");*/

const query1 = db.prepare("SELECT * FROM Utente WHERE eta > 18");
const res = query1.all();
const query2 = db.prepare("SELECT * FROM Utente WHERE eta = 16");
const res2 = query2.all();
const query5 = db.prepare('UPDATE Utente SET nome=@nome WHERE id=@id');

const info5 = query5.run({ id: 3, nome: 'Mirco'});
console.log(info5);

const query3 = db.prepare("DELETE FROM Utente WHERE id = ?");
const info6 = query3.run(1);

console.log(res);
console.log(res2);
console.log(info5);
console.log(info6);