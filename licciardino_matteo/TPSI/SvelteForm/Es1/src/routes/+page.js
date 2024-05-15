export const csr = true;
export const ssr = true;

export function load({params}){
    console.log("ESECUZIONE FUNZIONE LOAD: ", Date.now());

    let utenti = [
        "Mario",
        "Luca", 
        "Gianni",
        "Pino"
    ];

    return {utenti}
}