const capitalize_all = (ph) => {
    let splitted = ph.split(' ');
    let final = '';
    splitted.filter((e, i) => final += `${e[0].toUpperCase()}${e.substring(1,)} `);
    return final;  
};

let sentence = 'ciao mondo!!!';
console.log(`${sentence}\n${capitalize_all(sentence)}`);