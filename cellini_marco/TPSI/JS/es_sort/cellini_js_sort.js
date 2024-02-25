let dictonary = {
					'gennaio': 0,
					'febbraio': 1,
					'marzo': 2,
					'aprile': 3,
					'maggio': 4,
					'giugno': 5,
					'luglio': 6,
					'agosto': 7,
					'settembre': 8,
					'ottobre': 9,
					'novembre': 10,
					'dicembre': 11
				};

let mesi = ['Marzo', 'Giugno', 'Gennaio', 'Dicembre', 'Aprile'];

console.log(mesi.sort((a, b) => {return dictonary[a.toLowerCase()] - dictonary[b.toLowerCase()]}));
console.log(mesi.sort((a, b) => {return dictonary[b.toLowerCase()] - dictonary[a.toLowerCase()]}));