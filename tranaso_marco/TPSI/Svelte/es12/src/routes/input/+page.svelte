<script>
    let nome=" ";
    let cognome=""; 
    let eta="";
    let residenza="";
    let confermato=false;
</script>

    <h1>Input page</h1>

    Nome <input bind:value={nome}>
    Cognome <input bind:value={cognome}>
    Eta <input bind:value={eta}>
    Residenza <input bind:value={residenza}>

    <br><br>
    confermato <input type="checkbox" bind:checked={confermato}>
    <br><br>
    Io sono {nome} {cognome} ed ho {eta} anni e abito a {residenza}

    <br><br>

    <button disabled={!confermato}>Invia</button>