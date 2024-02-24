
let utente = {
    nome: "John",
    role: "user"
};

let nome = utente.nome;
let role = utente.role;
let is_Admin = utente.is_Admin;

if (is_Admin = "undefined") {
    is_Admin = false;
}

console.log(`utente : ${nome} - role: ${role} - is_admin: ${is_Admin} `);

