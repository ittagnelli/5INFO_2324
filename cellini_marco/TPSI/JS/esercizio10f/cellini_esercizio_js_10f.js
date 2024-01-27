const upper_case = (ph) => {
    let ris = '';
    ph.split('').filter((e, i) => {
        e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122 ? ris += String.fromCharCode(e.charCodeAt(0) - 32) : ris += e;
    });
    return ris;
};

let sentence = 'ciao mondo!!!';
console.log(`${sentence}\n${upper_case(sentence)}`);