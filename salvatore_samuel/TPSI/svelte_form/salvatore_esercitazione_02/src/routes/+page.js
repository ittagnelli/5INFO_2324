export const csr = true;
export const ssr = true;

let utenti = [
    {nome: 'Mario', cognome: 'Rossi', eta: 25},
    {nome: 'Luca', cognome: 'Bianchi', eta: 15},
    {nome: 'Gianni', cognome: 'Verdi', eta: 19},
    {nome: 'Pino', cognome: 'Silvedtre', eta: 27},
];

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log("I VALORI DEL FORM SONO:", data);
    }
};

export function load({ params }) {
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());

    return { utenti }
}