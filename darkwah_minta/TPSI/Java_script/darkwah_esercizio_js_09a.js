let utente = {
    nome: "Luca",
    cognome: "Sandreotti",
    eta: 18
}
let lung = Object.keys(utente);

for (let i = 0; i < lung.length; i++)
{
    console.log("chiave = " + lung[i]);
}