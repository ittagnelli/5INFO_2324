let stringa = "ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff";
let risultato = stringa.split('');
console.log(risultato);
risultato = risultato.filter((e) => e.charCodeAt(0) >= 65 && e.charCodeAt(0) <= 90);
console.log(risultato);