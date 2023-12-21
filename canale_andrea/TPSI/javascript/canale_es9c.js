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
	(this.enumera = () => Object.keys(this)),
	(this.esplodi = function () {
		delete this;
	});
	
}

let panda = new Macchina("Fiat", "Panda", 100, 1400, 12000);

console.log(panda.enumera());
