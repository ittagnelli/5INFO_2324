const count_wordls = (str) => {
	let m = new Map();
	str.toLowerCase().split(' ').map(e => m.has(e) ? m.set(e, m.get(e) + 1) : m.set(e, 1));
	return m;
};

let input = 'JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello';
let ans = count_wordls(input);
console.log(ans);
