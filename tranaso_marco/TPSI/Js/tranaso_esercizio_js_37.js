let utente = {
    nome: "Jon",
    role: "user"
}

let {nome,role, isAdmin=false} = utente;


console.log({nome,role,isAdmin})