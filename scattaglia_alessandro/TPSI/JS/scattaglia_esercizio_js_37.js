let utente = {
    nome: "Jon",
    role: "user"
}

let { nome, role, isAdim = false } = utente;


console.log(`Nome: ${nome} - Role: ${role} - ${isAdim}`);