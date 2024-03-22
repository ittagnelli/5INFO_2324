export const ssr = false;
export const csr = true;

export function load({ params }) {
    console.log("funzione LOAD", Date.now());

    let utenti = ['ciro', 'gianni', 'carmelo', 'kevin'];

    return { utenti };
}