const upper_case = (ph) => {
    let splitted = ph.split(' ');
    let final = '';
    splitted.filter((e, _) => final += `${e.toUpperCase()} `);
    return final;  
};

let sentence = 'ciao mondo!!!';
console.log(`${sentence}\n${upper_case(sentence)}`);