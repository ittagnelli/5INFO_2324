let utenti = [
    {nome: "Mario", cognome: "Rossi", eta: 25},
    {nome: "Luca", cognome: "Bianchi", eta: 15},
    {nome: "Gianni", cognome: "Verdi", eta: 19},
    {nome: "Pino", cognome: "Silvedtre", eta: 27},
];

export function load({params}){
    console.log("ESECUZIONE FUNZIONE LOAD: ", Date.now());

    return {utenti}
}

export const actions = {
    default: async ({cookies, request}) => {
        const data = await request.formData();
        console.log("I valori del form sono: ", data);

        utenti.push({
            nome: data.get("nome"),
            cognome: data.get("cognome"),
            eta: data.get("eta")
        })
    }
}