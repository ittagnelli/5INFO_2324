let utente = {
    nome: "Jon",
    role: "user"
};
console.log(utente);
let {nome, role, isAdmin: is_admin = false} = utente;

console.log(nome, role, is_admin);