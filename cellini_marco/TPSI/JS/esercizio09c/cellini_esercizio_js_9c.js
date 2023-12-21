let enumera = function() {
	for(let key in this)
		console.log(`${key} - ${this[key]}`);
};

let Automobile = function(marca) {
	(this.marca = marca),
	(this.set = (value) => this.marca = value),
	(this.enumera = enumera)
};

let Animale = function(tipo) {
	(this.tipo = tipo),
	(this.set = (value) => this.tipo = value),
	(this.enumera = enumera)
};

let auto1 = new Automobile("Panda");
let animale1 = new Animale("Zebra");

auto1.enumera();
animale1.enumera();
