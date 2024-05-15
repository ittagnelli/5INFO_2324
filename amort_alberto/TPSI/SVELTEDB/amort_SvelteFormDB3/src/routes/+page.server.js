import Database from 'better-sqlite3';

const db = new Database('/home/alberto-amort/Scrivania/User.db');

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