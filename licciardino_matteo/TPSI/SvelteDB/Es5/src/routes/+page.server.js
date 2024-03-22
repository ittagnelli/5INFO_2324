import Database from "better-sqlite3";

const db = new Database("USER.db", { verbose: console.log })

let utenti = [
    {nome: "Mario", cognome: "Rossi", eta: 25},
    {nome: "Luca", cognome: "Bianchi", eta: 15},
    {nome: "Gianni", cognome: "Verdi", eta: 19},
    {nome: "Pino", cognome: "Silvedtre", eta: 27},
];

export function load({ params }){
    console.log("ESECUZIONE FUNZIONE LOAD: ", Date.now());

    const query1 = db.prepare("SELECT * FROM Utente");
    const res1 = query1.all();

    return {utenti: res1}
}

export const actions = {
    default: async ({cookies, request}) => {
        const data = await request.formData();
        console.log("I valori del form sono: ", data);

        const user = {
            nome: data.get("nome"),
            cognome: data.get("cognome"),
            eta: data.get("eta")
        }

        if(user.nome && user.cognome && user.eta){
            utenti.push(user);
        } else {
            return {
                form_error: true,
                form_vals: user
            }
        }
    }
}