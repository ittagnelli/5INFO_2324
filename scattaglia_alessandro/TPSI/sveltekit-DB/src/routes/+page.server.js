import Database from 'better-sqlite3'
const db = new Database("USER.db", { verbose: console.log });

let utenti = [
    {

        nome: "mario", cognome: "rossi", eta: 41

    }
];

export function load({ params }) {
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());

    // creo la lista degli utenti. Qui potrei accedere al DB


    // restituiamo la lista degli utenti
    return { utenti }
}

export const actions = {
    create: async ({ cookies, request}) => {
        const data = await request.formData();
        console.log("CREATED ACTION");
        console.log("I VALORI DEL FORM SONO: ", data);
        
        const query2 = db.prepare("INSERT INTO Utente (nome,cognome,eta) VALUES(@nome, @cognome, @anni");
        const user = {
            nome: data.get("nome"),
            cognome: data.get("cognome"),
            eta: data.get("eta")
        }
        if(user.nome && user.cognome && user.eta)
        {
            const res2 = query2.run({
                nome: user.nome,
                cognome: user.cognome,
                eta: +user.eta
            });
        }
        else{
            return{
                form_error: true,
                form_vals: user
            }
        }
    },
};