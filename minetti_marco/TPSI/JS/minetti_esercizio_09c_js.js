let sniff = function () { console.log(`La mia auto è ${this.nome} ${this.marca}`, 'cavoli, ma ha ', this.eta, 'anni ed è pure bassa (', this.altezza, ')', 'è color ', this.colore); }


let Auto = function (nome, marca, eta, altezza, colore) {
    (this.nome = nome),
      (this.marca = marca),
      (this.eta = eta),
      (this.altezza = altezza),
      (this.colore = colore),
      (this.sniff = sniff),
      (this.speak = function () {
        console.log(`La mia auto è ${this.nome} ${this.marca}`);
      }),
      (this.write = () => {
        console.log('cavoli, ma ha ', this.eta, 'anni ed è pure bassa (', this.altezza, ')');
      }),
      (this.cavoli = () => {
        console.log('è color ', this.colore);
      });
  };

  let auto1 = new Auto("BRZ", "subaru", 2005, 150, "black");
  let auto2 = new Auto("GT86", "toyota", 2005, 150, "black");
  let auto3 = new Auto("La Ferrari", "ferrari", 2019, 148, "rossa");

  auto1.speak();
  auto1.write();
  auto1.cavoli();
  auto1.sniff();
  auto2.speak();
  auto2.write();
  auto2.cavoli();
  auto2.sniff();
  auto3.speak();
  auto3.write();
  auto3.cavoli();
  auto3.sniff();