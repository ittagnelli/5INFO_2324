const search_words = (s) => {
    return s.search('coding') * s.search('creativo') >= 0 ? s : 'parole non trovate';
};

let str = `C'era una volta coding che lavorava nel settore creativo`;
console.log(search_words(str));