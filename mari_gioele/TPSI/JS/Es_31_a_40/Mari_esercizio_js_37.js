let utente = {
    nome: "Jonh",
    role: "user"
};

let {nome, role, is_admin = false} = utente;

console.log(nome + " " + role + " " + is_admin)