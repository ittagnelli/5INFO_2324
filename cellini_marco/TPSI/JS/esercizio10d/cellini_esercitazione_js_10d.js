const capitalize = (ph) => {
    return `${ph[0].toUpperCase()}${ph.substring(1,)}`
};

let sentence = 'ciao mondo!!!';
console.log(`${sentence}\n${capitalize(sentence)}`);