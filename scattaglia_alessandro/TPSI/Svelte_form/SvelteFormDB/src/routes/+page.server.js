
let utenti = [
    { nome: 'Mario', cognome: 'Rossi', eta: 25 },
    { nome: 'Paolo', cognome: 'Bianchi', eta: 30 },
    { nome: 'Luca', cognome: 'Gialli', eta: 42 },
    { nome: 'Stefano', cognome: 'Negri', eta: 23 }
];
export function load({ params }) {
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());

    // creo la lista degli utenti. Qui potrei accedere al DB


    // restituiamo la lista degli utenti
    return { utenti }
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log("I valori del form sono", data)

        const user = {
            nome: data.get('nome'),
            cognome: data.get('cognome'),
            eta: data.get('eta')
        }
        if (user.nome && user.cognome && user.eta)
        {
            utenti.push(user)
        }
        else{
            return{
                form_error:true,
                form_vals:user
            }
        }
    },
};
