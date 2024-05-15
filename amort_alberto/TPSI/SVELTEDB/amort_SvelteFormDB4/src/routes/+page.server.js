import Database from 'better-sqlite3';

const db = new Database('/home/alberto-amort/miacartella_dbml/amort_SvelteFormDB4/src/routes/User.db');


export const csr= true; //csr attivo
export const ssr= true; //ssr attivo



let utenti=[
    {nome: 'Mario', cognome:'Rossi', eta: 25},
    {nome: 'Luca', cognome:'Bianchi', eta: 15},
    {nome: 'Gianni', cognome:'Verdi', eta: 19},
    {nome: 'Pino', cognome:'Silvedtre', eta: 27}

];

export function load({params}) 
{
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());
    // creo la lista degli utenti. Qui potrei accedere al DB
    
    const query1=db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(@nome, @cognome, @anni)')
    const info4= query1.run({anni: 25, cognome: 'Bianchi', nome: 'Mirko'})

    // restituiamo la lista degli utenti
    return {utenti}

};

export const actions = {
    default: async({cookies, request}) =>{
        const data = await request.formData();
        console.log("I VALORI DEL FORM SONO:", data);
    
        const user={
            nome: data.get('nome'),
            cognome: data.get('cognome'), 
            eta: data.get('eta')
        }

        if(user.nome && user.cognome && user.eta)
        {
            utenti.push(user);
        }

        else{
            return {form_error: true, form_vals: user}
        }
    }
    };
