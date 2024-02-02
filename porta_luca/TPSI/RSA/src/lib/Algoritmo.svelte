<script>
    let p, q, n, v, npriv, npub=0, chiaro=[], crypto="", ascii=[], deascii_chiaro=[], deascii_crypto=[], decrypto="";
    $:n=q*p;
    $:v=(q-1)*(p-1);
    const calcola = () => {
        if(!p || !q || !npriv){alert("Valori non inseriti!!!");}
        else if(p<7 || q<7 || npriv<7){alert("Valore troppo piccolo!!!");}
        else{
            if(p==q || q==npriv || p==npriv || !primo(p) || !primo(q) || !primo(npriv)){
                alert("Non valido!!!");
            }
            else{
                npub=chiave_pubblica(npub, npriv, v);
                if(!chiaro){alert("Messaggio inesistente!!!");}
                else{
                    ascii=ascii_f(chiaro);
                    deascii_crypto=encrypt(ascii, npub, n);
                    deascii_chiaro=decrypt(deascii_crypto, npriv, n);
                    crypto=deascii_f(deascii_crypto);
                    decrypto=deascii_f(deascii_chiaro);
                }
            }
        }
    }
    function primo(n){
        let m=n;
        for(;;){
            m--;
            if(n%m==0){return false;}
            else if(m==2){return true;}
        }
    }
    function chiave_pubblica(npub, npriv, v){
        npub=0;
        for(;;){
            npub++;
            if((npub*npriv)%v==1 && npriv!=npub){break;}
        }
        return npub;
    }
    function ascii_f(chiaro){
        ascii = [];
        deascii_crypto = [];
        deascii_chiaro = [];
        for(var i=0;i<chiaro.length;i++){
            const carattere = chiaro.charCodeAt(i);
            ascii.push(carattere);
        }
        return ascii;
    }
    function encrypt(ascii, npub, n){
        let potenza;
        for(var i=0;i<ascii.length;i++){
            potenza=BigInt(ascii[i])**BigInt(npub);
            deascii_crypto[i]=Number(potenza%BigInt(n));
        }
        return deascii_crypto;
    }
    function decrypt(deascii, npriv, n){
        let potenza;
        for(var i=0;i<deascii_crypto.length;i++){
            potenza=BigInt(deascii_crypto[i])**BigInt(npriv);
            deascii_chiaro[i]=Number(potenza%BigInt(n));
        }
        return deascii_chiaro;
    }
    function deascii_f(deascii){
        const crypto = String.fromCharCode(...deascii);
        return String(crypto);
    }
</script>

<main>
    <div><span>P</span>:<input type="text" bind:value={p}></div>
    <div><span>Q</span>:<input type="text" bind:value={q}></div>
    <div><span>Npriv</span>:<input type="text" bind:value={npriv}></div>
    <div><span>Npub</span>:{npub}</div>
    <div class="risultato"><span>N</span>: {n}</div>
    <div class="risultato"><span>V</span>: {v}</div>
    <div class="risultato"><span>Kpriv</span>:({n},{npriv})</div>
    <div class="risultato"><span>Kpub</span>:({n},{npub})</div>
    <div class="calcola"><span>Messaggio</span>: <input type="text" bind:value={chiaro}></div>
    <div class="risultato"><span>Chiaro</span>:<br>{chiaro}</div>
    <div class="risultato"><span>Cryptato</span>:<br>{crypto}</div>
    <div class="risultato"><span>Chiaro&#40;ASCII&#41;</span>:<br>{ascii}</div>
    <div class="risultato"><span>Cryptato&#40;ASCII&#41;</span>:<br>{deascii_crypto}</div>
    <div class="risultato"><span>Decryptato&#40;ASCII&#41;</span>:<br>{deascii_chiaro}</div>
    <div class="risultato"><span>Decryptato</span>:<br>{decrypto}</div>
    <div><button class="calcola" on:click={calcola}>Calcola</button></div>
</main>

<style>
    main{
        height: 80%;
        color: blue;
        font-size: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    input{
        color: blue;
        font-size: 30px;
        width: 10%;
    }
    button{
        border: none;
        background-color: red;
        border-radius: 30px;
        color: white;
        font-size: 70px;
        font-family: 'Agbalumo';
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
    div{
        width: 25%;
        text-align: center;
        font-family: 'Nova Square';
    }
    .risultato{width: 50%;}
    .calcola{width: 100%;}
    .calcola input{width: 50%;}
    span{text-decoration: underline;}
</style>