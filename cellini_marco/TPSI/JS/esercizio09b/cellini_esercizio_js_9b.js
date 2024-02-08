let velocità = 0;
let open = false;


let Automobile = function (marca, modello, targa, porte, cilindrata) {
	(this.marca = marca),
	(this.modello = modello),
	(this.targa = targa),
	(this.porte = porte),
	(this.cilindrata = cilindrata),
	(this.accellera = () => velocità++),
	(this.frena = () => velocità--),
	(this.apri_chiudi = () => open = !open);
};

let a1 = new Automobile("ford", "focus", "nm345nm", 5, 3000);
let a2 = new Automobile("Audi", "RS6", "uo434gp", 5 ,6000);
let a3 = new Automobile("BMW", "i8", "po895fk", 3, 2000);
let a4 = new Automobile("Fiat", "panda", "fs458de", 5, 1200);
let a5 = new Automobile("Lancia", "delta", "dp504kt", 3, 3000);

a1.accellera();
a2.frena();
a3.apri_chiudi();
