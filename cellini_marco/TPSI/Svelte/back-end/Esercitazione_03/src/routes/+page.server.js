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

        const user = {
            nome: data.get('nome'),
            cognome: data.get('cognome'),
            eta: data.get('eta')
        };

        if (user.nome && user.cognome && user.eta)
            utenti.push(user);
        else
            return { form_error: true, form_vals: user };
    }
};