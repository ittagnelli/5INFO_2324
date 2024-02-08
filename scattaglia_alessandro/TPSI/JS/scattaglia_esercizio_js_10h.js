function tronca(str) {
    let L = 15;
    if (str.length <= L) {
        return str;
    } else {
        console.log(`${str.slice(0, L)}...`);
    }
}


tronca("La mamma lava i piatti");
