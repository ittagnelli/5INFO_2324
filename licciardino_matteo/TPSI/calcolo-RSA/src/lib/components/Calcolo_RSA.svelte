<script>
    let p = "", q = "";
    let N = 0, V = 0;
    let Npriv = "", Npub = 0;
    let clear = "", asciiValues = [];
    let c = "", m = [];

    const isPrime = (num) => {
        if (num <= 0) return false;
        if (num <= 3) return true;
    
        if (num % 2 === 0 || num % 3 === 0) return false;
    
        for (let i = 0; i * i <= num; i = i + 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
    
        return true;
    }

    const validateNumberInput = (input) => {
        const regex = /^\d+$/;
        return regex.test(input);
    };

    const commonFactors = (number1, number2) => {
        const factors1 = Array.from({ length: number1 + 1 }, (_, i) => i).filter(i => number1 % i === 0);
        const factors2 = Array.from({ length: number2 + 1 }, (_, i) => i).filter(i => number2 % i === 0);

        return factors1.filter(factor => factors2.includes(factor) && factor !== 1);
    };

    const generateRandomCoprime = (maxValue) => {
        let randomNum = generateRandomPrime(maxValue);

        while (commonFactors(randomNum, V).length !== 0) {
            randomNum = generateRandomPrime(maxValue);
        }

        return randomNum;
    };

    const generateRandomPrime = (maxValue) => {
        let randomNum = Math.floor(Math.random() * maxValue);

        while (!isPrime(randomNum)) {
            randomNum++;
        }

        return randomNum;
    };

    const convertToAscii = () => {
        asciiValues = clear.split('').map(char => char.charCodeAt(0));
    };

    const encryptLetter = (letter, publicKey, modulus) => {
        let result = BigInt(letter) ** BigInt(publicKey);
        let resMod = result % BigInt(modulus);
        return resMod;
    }; 
    
    const encryptMessage = (message, publicKey, modulus) => {
        return message.map(char => encryptLetter(char, publicKey, modulus));
    };

    const dencryptLetter = (cipher, privateKey, modulus) => {
        let result = BigInt(cipher) ** BigInt(privateKey);
        let deresMod = result % BigInt(modulus);
        return Number(deresMod);
    };

    const dencryptMessage = (cipher, privateKey, modulus) => {
        return cipher.map(char => String.fromCharCode(dencryptLetter(char, privateKey, modulus)));
    };
    
    $: {
        if (isPrime(p) && isPrime(q)){
            N = p * q;
            V = (p-1)*(q-1);

            Npriv = Npriv || generateRandomCoprime(V);

            let decryptionSuccess = false;

            for (let foundNpub = 2; foundNpub < V; foundNpub++) {
                    if ((foundNpub * Npriv) % V === 1) {
                    Npub = foundNpub;
                    decryptionSuccess = true;
                    break;
                } 
            }

            if (!decryptionSuccess) {
                Npriv = generateRandomCoprime(V);
            }

            while (Npub === Npriv) {
                Npub = generateRandomCoprime(V);
            }

            c = encryptMessage(asciiValues, Npub, N);
            m = dencryptMessage(c, Npriv, N);
        }
    }
</script>

<h1>Calcolo con RSA</h1>

<div> 
    <div>
        Inserire il valore di p: <input bind:value={p} on:input={() => validateNumberInput(p)}><br>
        Il valore di p è di: {p}
    </div>
    <div>
        Inserire il valore di q: <input bind:value={q} on:input={() => validateNumberInput(q)}><br>
        Il valore di q è di: {q}
    </div>
    <div>
        N = {N} 
        V = {V} 
    </div>
    <div>
        Il valore di Npriv è di: {Npriv}
    </div>
    <div>
        Il valore di Npub è di: {Npub}
    </div>
    <div>
        Kpriv = ({N}, {Npriv}) 
        Kpub = ({N}, {Npub}) 
    </div>
    <div>
        Inserire il testo in chiaro: <input bind:value={clear} on:input={convertToAscii}><br>
        Il testo in chiaro è: {clear}<br>
        convertito in ascii: {asciiValues.join(', ')}
    </div>
    <div>
        il tuo testo cifrato è: {c}
    </div>
    <div>
        il tuo testo decifrato è: {m.join('')}
    </div>
</div>

<style>
    h1{
        text-align: center;
        color: red;
        text-decoration: underline;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 2em;
    }

    input{
        width: 6em;
        text-align: center;
    }
</style>