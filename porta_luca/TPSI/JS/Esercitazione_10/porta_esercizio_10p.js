function tronca(s, n){
    s=s.split(' ');
    for(var i=0;i<n;i++){
        console.log(s[i]);
    }
    console.log('...');
}

tronca('ciao come va', 2);