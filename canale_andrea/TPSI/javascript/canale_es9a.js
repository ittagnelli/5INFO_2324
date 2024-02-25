let gennaro = {
	"Nome": "Ciro",
	"Cognome": "Esplosito"
};

let keys = Object.keys(gennaro);

// Soluzione giusta
//keys.forEach(key => console.log(gennaro[key]));
//
//
for(let i = 0; i < keys.length; i++) {
	console.log(keys[i]);
}
