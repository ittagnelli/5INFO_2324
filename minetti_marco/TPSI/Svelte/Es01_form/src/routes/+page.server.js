export const csr = true; // csr attivo
export const ssr = true; //ssr attivo

let utenti = [
    {nome: 'Mario', cognome:'Rossi', eta: 25},
    {nome: 'Luca', cognome:'Bianchi', eta: 15},
    {nome: 'Gianni', cognome:'Verdi', eta: 19},
    {nome: 'Pino', cognome:'Giuggiola', eta: 27}
];

export function load({ params }) {
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());

    return { utenti }
};

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log("I VALORI SONO: ", data);

        const user = {
                nome: data.get('nome'),
                cognome: data.get('cognome'),
                eta: data.get('eta')
        }
        if (user.nome && user.cognome && user.eta) {
            utenti.push(user);
        } else {
            return {
                form_error: true,
                form_vals: user
            }
        }
    }

};