import Database from "better-sqlite3";

let utenti = [
    { nome: 'Mario', cognome: 'Rossi', eta: 25 },
    { nome: 'Luca', cognome: 'Verdi', eta: 20 },
    { nome: 'Ciro', cognome: 'Esposito', eta: 21 },
    { nome: 'Gianni', cognome: 'Bianchi', eta: 35 }
];

const connect_to_db = (path) => {
    return new Database(path);
};

const query = (con, query, infos) => {
    return con.prepare(query).all(infos);
};

const query_run = (con, query, infos) => {
    return con.prepare(query).run(infos);
};

export function load({ params }) {
    console.log("funzione LOAD", Date.now());

    const connection = connect_to_db("./USER.db");
    return {utenti: query(connection, 'SELECT * FROM Utente', {})};
}

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log("I valori del form sono: ", data);

        const user = {
            nome: data.get('nome'),
            cognome: data.get('cognome'),
            eta: data.get('eta')
        };

        if (user.nome && user.cognome && user.eta) {
            const res = query_run(connect_to_db("./USER.db"), 'INSERT INTO Utente(nome, cognome, eta) VALUES(@nome, @cognome, @eta)', {nome: user.nome, cognome: user.cognome, eta: +user.eta});
        }
        else
            return { form_error: true, form_vals: user };
    }
};