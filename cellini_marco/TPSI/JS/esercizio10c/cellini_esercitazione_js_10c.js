const untokenize = (ph) => {
    return ph.replaceAll(' ', '-');
};

let sentece = 'IN: Nel mezzo del cammin di nostra vita';
console.log(`${sentece}\n${untokenize(sentece)}`);