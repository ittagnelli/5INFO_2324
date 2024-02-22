let decostruzione= function(utente)
{
    let {nome, role, is_admin=false}=utente;
    console.log(nome + " " + role + " " + is_admin)

}

let utente = {
    nome: "Jon",
    role: "user"
}

decostruzione(utente);