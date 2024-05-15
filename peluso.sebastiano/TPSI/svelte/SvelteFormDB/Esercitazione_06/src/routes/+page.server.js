

import Database from 'better-sqlite3';

const db = new Database('USER.db', {verbose: console.log});



export function load({params}){
    console.log("ESECUZIONE FUNZIONE LOAD: ", Date.now());

    const query1 = db.prepare("SELECT * FROM Utente");
    const res1 = query1.all();


    return {
        utenti: res1,
    };
    
}

export const actions = {
    create: async({cookies, request}) =>{
        const data = await request.formData();
        console.log("CREATE ACTION");
        console.log("I VALORI del FORM sono", data);

        const query2 = db.prepare("INSERT INTO Utente (nome,cognome,eta) VALUES(@nome,@cognome,@eta)");
        

        const user = {
            nome: data.get("nome"),
            cognome: data.get("cognome"),
            eta: data.get("eta")
        }

        if (user.nome && user.cognome && user.eta) {
            const res2 = query2.run({
                nome: user.nome,
                cognome: user.cognome,
                eta: +user.eta

            });
        }else{
            return{
                form_error: true,
                form_vals: user
                
            }
        }
        

    },
};

