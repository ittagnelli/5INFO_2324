function sum(a) {
	let somma = 0;
	for(let i = 0; i < a;i++)
		somma += i;

	return somma;
}


const main = () => console.log(sum(5));

main();
