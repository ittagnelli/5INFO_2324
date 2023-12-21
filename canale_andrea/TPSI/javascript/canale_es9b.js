let Macchina = function(marca, modello, cavalli, cilindrata, prezzo){
	(this.marca = marca),
	(this.modello = modello),
	(this.cavalli = cavalli),
	(this.cilindrata = cilindrata),
	(this.prezzo = prezzo),
	(this.accelera = function (pos) { 
		pos++;
		return pos;
	}),
	(this.decelera = function (pos) {
		pos--;
		return pos;
	}),
	(this.esplodi = function () {
		delete this;
	});
}

let panda = Macchina("Fiat", "Panda", 100, 1400, 12000);
let rs6 = Macchina("Audi", "RS6", 300, 3000, 70000);
let civic = Macchina("Honda", "Civic", 140, 1800, 25000);
let mx5 = Macchina("Mazda", "MX5", 130, 2000, 30000);
let bmw = Macchina("BMW", "420d", 180, 2000, 45000);

panda.esplodi();
rs6.accelera(2);
civic.decelera(100);
mx5.esplodi();
bmw.accelera(5);
