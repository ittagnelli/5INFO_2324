

import Database from 'better-sqlite3';

const db = new Database('/home/macchinavirtuale/Documenti/svelte _form/WebApp/USER.db');



let utenti = [
    {nome: 'mario', cognome:'rossi', eta:18},
    {nome: 'luca', cognome:'bianchi', eta:14},
    {nome: 'gianni', cognome:'verdi', eta:16},
    {nome: 'pino', cognome:'silvedtre', eta:19},
];

export function load({params}){
    console.log("ESECUZIONE FUNZIONE LOAD: ", Date.now());


    return {utenti};
    
}

export const actions = {
    default: async({cookies, request}) =>{
        const data = await request.formData();
        console.log("I VALORI del FORM sono", data);

        const user = {
            nome: data.get("nome"),
            cognome: data.get("cognome"),
            eta: data.get("eta")
        }

        
        if (user.nome && user.cognome && user.eta) {
            utenti.push(user);
        }else{
            return{
                form_error: true,
                form_vals: user
                
            }
        }
        

    },
};

