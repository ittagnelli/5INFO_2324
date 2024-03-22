export const ssr = false;
export const csr = true;

let utenti = [
    { nome: 'Mario', cognome: 'Rossi', eta: 25 },
    { nome: 'Luca', cognome: 'Verdi', eta: 20 },
    { nome: 'Ciro', cognome: 'Esposito', eta: 21 },
    { nome: 'Gianni', cognome: 'Bianchi', eta: 35 }
];

export function load({ params }) {
    console.log("funzione LOAD", Date.now());

    return { utenti };
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log("I valori del form sono: ", data);

        utenti.push({
            nome: data.get('name'),
            cognome: data.get('surname'),
            eta: data.get('age')
        });
    }
};