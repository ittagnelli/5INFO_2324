const psw_gen = (len) => {
    psw = [];
    while (psw.length != len) {
        let ran = Math.floor(Math.random() * (48 - 122) + 122);
        ran < 58 || (ran > 64 && ran < 91) || ran > 96 ? psw.push(String.fromCharCode(ran)) : null;
    }
    return psw;
};

console.log(`Password: ${psw_gen(7)}`);