import Database from "better-sqlite3";

const insert_3_user = (con) => {
    con.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES (?, ?, ?)').run('Ciro', 'Esposito', 14);
    con.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES (?, ?, ?)').run('Gianni', 'vatte la pesca', 41);
    con.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES (?, ?, ?)').run('Pippo', 'Pluto', 23);
};

const connect_to_db = (path) => {
    return new Database(path);
};

const query = (con, query, infos) => {
    return con.prepare(query).all(infos);
};

const query_run = (con, query, infos) => {
    return con.prepare(query).run(infos);
};

const connection = connect_to_db("./USER.db");
//insert_3_user(connection);
console.log(query(connection, 'SELECT * FROM Utente WHERE eta > @eta', {eta: 18}));
console.log(query(connection, 'SELECT * FROM Utente WHERE eta = @eta', {eta: 16}));
query_run(connection, 'UPDATE Utente SET nome=@nome WHERE id=@id', {nome: 'Pippo_cocaina', id: 1})
console.log(query(connection, 'SELECT * FROM Utente WHERE id=@id', {id: 1}));
query_run(connection, 'DELETE FROM Utente WHERE id=@id', {id: 2});