function assegna(){
    return{
        nome: 'Jon',
        role: 'User'
    };
}

let {nome, role, is_admin}=assegna();
if(!nome){nome=false;}
if(!role){role=false;}
if(!is_admin){is_admin=false;}
console.log(`${nome} ${role} ${is_admin}`);