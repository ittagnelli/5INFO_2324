let Utente = function (marca, modello, anno, n_propet, tipo) {
    (this.marca = marca),
    (this.modello = modello),
    (this.anno = anno),
    (this.n_propet = n_propet),
    (this.tipo = tipo),
    (this.prod = function () {
        console.log(`>> Auto ${this.marca} ${this.modello} dell'${this.anno} di ${this.n_propet} tipologia ${this.tipo} verrà venduto in Italia`);
    }),
    (this.bloc = function () {
        console.log(`>> Auto ${this.marca} ${this.modello} dell'${this.anno} di ${this.n_propet} tipologia ${this.tipo} verrà bloccato in India`);
      }),
    (this.conclus = function () {
        console.log(`>> Auto ${this.marca} ${this.modello} dell'${this.anno} di ${this.n_propet} tipologia ${this.tipo} è stato concluso`);
      }),
    (this.enumera = function () {
        let lung = Object.keys(this);

        for (let i = 0; i < lung.length; i++)
        {
            console.log("chiave = " + lung[i]);
        }
    })
};


let utente1 = new Utente("Lamborghini", "fg45","1990","Luca","elettrica");
let utente2 = new Utente("Tesla", "Indiana","2020","Marco","elettrica");
let utente3 = new Utente("Stellantis", "Roma","2021","Samanta","ibrida");

utente1.prod();
utente2.bloc();
utente3.enumera()