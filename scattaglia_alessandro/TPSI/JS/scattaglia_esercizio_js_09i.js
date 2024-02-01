function maggiore(a, b, c) {
    let ris = (a >= b) ? ((a >= c) ? a : c) : ((b >= c) ? b : c);
    console.log(ris);
}
maggiore(1, 2, 4);
maggiore(33, 4, 66);
maggiore(5, 104, 897);