const minimize_all = (ph) => {
    let splitted = ph.trim().split(' ');
    let final = '';
    splitted.filter((e, _) => final += `${e[0].toLowerCase()}${e.substring(1,)} `);
    return final;  
};

const inver_case = (ph) => {
    let splitted = ph.split(' ');
    let final = '';
    splitted.filter((e, _) => final += `${e.toUpperCase()} `);
    return minimize_all(final);
};

let sentence = 'ciao mondo!!!';
console.log(`${sentence}\n${inver_case(sentence)}`);