function caratteriCasuali() {
    const lunghezza=7;
    const caratteri_usa='1234567890abcdefghijklmnopqrstuvwxyz';
    let arrayCaratteri=[];

    for (let i = 0; i < lunghezza; i++) {
        const rand = Math.floor(Math.random() * caratteri_usa.length);
        arrayCaratteri.push(caratteri_usa[rand]);
    }

    return arrayCaratteri;
}

console.log(caratteriCasuali()); 
