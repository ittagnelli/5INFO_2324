<script>
    let p, q, n, v, npriv, npub=0, chiaro=[], crypto="", ascii=[], ascii1=[], deascii=[], potenza, chiaro1="";
    $:n=q*p;
    $:v=(q-1)*(p-1);
    const calcola = () => {
        npub=0;
        let mq=q, mp=p, mnpriv=npriv, status=true;
        for(;;){
            mq--
            if(q%mq==0){status=false;break;}
            else if(mq==2){break;}
        }
        for(;;){
            mp--
            if(p%mp==0){status=false;break;}
            else if(mp==2){break;}
        }
        for(;;){
            mnpriv--
            if(npriv%mnpriv==0){status=false;break;}
            else if(mnpriv==2){break;}
        }
        if(!status || p==q || q==npriv){
            q=undefined;
            p=undefined;
            npriv=undefined;
            alert("Non valido!!!");
        }
        else{
            for(;;){
                npub++;
                if((npub*npriv)%v==1 && npriv!=npub){break;}
            }
            if(!chiaro){alert("Messaggio inesistente!!!");}
            else{
                ascii=ascii_f(chiaro);
                for(var i=0;i<ascii.length;i++){
                    potenza=BigInt(ascii[i])**BigInt(npub);
                    deascii[i]=Number(potenza%BigInt(n));
                }
                for(var i=0;i<deascii.length;i++){
                    potenza=BigInt(deascii[i])**BigInt(npriv);
                    ascii1[i]=Number(potenza%BigInt(n));
                }
                crypto=deascii_f(deascii);
                chiaro1=deascii_f(ascii1)

            }
        }
    }
    function ascii_f(chiaro){
        ascii = [];
        deascii = [];
        for(var i=0;i<chiaro.length;i++){
            const carattere = chiaro.charCodeAt(i);
            ascii.push(carattere);
        }
        return ascii;
    }
    function deascii_f(deascii){
        const crypto = String.fromCharCode(...deascii);
        return String(crypto);
    }
</script>

<!--function ascii(chiaro){
        chiaro = [];
        for(var i=0;i<chiaro.length;i++){
            const carattere = chiaro.charCodeAt(i);
            chiaro.push(carattere);
        }
        return chiaro;
    }
    function deascii_f(ascii) {
        const deascii = String.fromCharCode(...ascii);
        return deascii;
    }
-->

<main>
    <div>P:<input type="text" bind:value={p}></div>
    <div>Q:<input type="text" bind:value={q}></div>
    <div>Npriv:<input type="text" bind:value={npriv}></div>
    <div>Npub:{npub}</div>
    <div class="risultato">N: {n}</div>
    <div class="risultato">V: {v}</div>
    <div class="risultato">Kpriv:({n},{npriv})</div>
    <div class="risultato">Kpub:({n},{npub})</div>
    <div class="calcola">Messaggio: <input type="text" bind:value={chiaro}></div>
    <div class="risultato">Chiaro:{chiaro}</div>
    <div class="risultato">Cryptato:{crypto}</div>
    <div class="risultato">Chiaro&#40;ASCII&#41;:{ascii}</div>
    <div class="risultato">Cryptato&#40;ASCII&#41;:{deascii}</div>
    <div class="risultato">Decryptato&#40;ASCII&#41;:{ascii1}</div>
    <div class="risultato">Decryptato:{chiaro1}</div>
    <div><button class="calcola" on:click={calcola}>Calcola</button></div>
</main>

<style>
    main{
        height: 80%;
        color: blue;
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
    }
    div{
        width: 25%;
        text-align: center;
        font-family: 'Nova Square';
    }
    .risultato{width: 50%;}
    .calcola{width: 100%;}
    .calcola input{width: 50%;}
</style>