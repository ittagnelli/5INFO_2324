function massimo(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
function main() {
    console.log("Il maggiore è", massimo(10, 5, 8));
    console.log("Il maggiore è:", massimo(15, 20, 17));
    console.log("Il maggiore è:", massimo(3, 3, 3));
}
main();
