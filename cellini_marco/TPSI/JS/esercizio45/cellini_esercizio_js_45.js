// aggiunge un handler all'evento DOMContentLoaded
// che viene generato quando la pagina HTML ha terminato il suo caricamento
document.addEventListener("DOMContentLoaded", function () {

    // ricata l'oggetto DOM del form
    let form_utente = document.getElementById('dati');

    //aggiunge un handler all'evento submit del form
    //in modo da inibire il normale funzionamento (invio del form verso il server)
    form_utente.addEventListener("submit", function (event) {
        event.preventDefault();
    });
});

class Persona {
    constructor(n, s, a, h) {
        this.name = n;
        this.surname = s;
        this.age = a;
        this.hair = h;
    }
    descrivi() { console.log(`Ciao io sono l'utente ${this.name} ${this.surname} di anni ${this.age} e con i capelli color ${this.hair}`) };
}

const print = (u, id) => {
    for (let value in u) {
        let tmp = document.createElement('p');
        tmp.id = value;
        tmp.innerText = `${value}: ${u[value]}`;
        document.getElementById(id).appendChild(tmp);
    }
};

//processa il form quando l'utente preme submit
function process_form() {
    console.log("process form");
    form = document.forms['dati'];
    let user = new Persona(form.elements['name'].value, form.elements['surname'].value, form.elements['age'].value, form.elements['hair_color'].value)
    user.descrivi();

    print(user, 'output');
    
    delete user.age;
    delete user.hair;

    print(user, 'output2');
}