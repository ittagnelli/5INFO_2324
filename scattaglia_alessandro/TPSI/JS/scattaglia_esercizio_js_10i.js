function trova(str) {
    var coding = str.indexOf('coding');
    var creativo = str.indexOf('creativo');


    if (coding != -1 && creativo != -1) {
        console.log(str);
    } else {
        console.log('parole non trovate');
    }
}


trova("questa e' una frase da creativo coding cercare");