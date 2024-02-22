let dictonary = [
	'gennaio',
	'febbraio',
	'marzo',
	'aprile',
	'maggio',
	'giugno',
	'luglio',
	'agosto',
	'settembre',
	'ottobre',
	'novembre',
	'dicembre'
];

let mesi = ['Marzo', 'Giugno', 'Gennaio', 'Dicembre', 'Aprile'];

console.log(mesi.sort((a, b) => { return dictonary.indexOf(a.toLowerCase()) - dictonary.indexOf(b.toLowerCase()) }));
console.log(mesi.sort((a, b) => { return dictonary.indexOf(b.toLowerCase()) - dictonary.indexOf(a.toLowerCase())}));