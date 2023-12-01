<script>
    let nome , cognome ,eta;
    let confermato= false;
</script>

<h1>Input Page</h1>

Nome <input bind:value={nome}>
Cognome <input bind:value={cognome}>
Età <input bind:value={eta}>

<br><br>

Confermato <input type="checkbox"  bind:checked={confermato}>


<br><br>

Io sono {nome} {cognome} e ho {eta} anni

<br> <br>

<button disabled={!confermato}>Invia</button>