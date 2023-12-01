<script>
    let nome=" ";
    let cognome=""; 
    let eta="";
</script>

    <h1>Input page</h1>

    Nome <input bind:value={nome}>
    Cognome <input bind:value={cognome}>
    Eta <input bind:value={eta}>

    <br><br>
    Io sono {nome} {cognome} ed ho {eta} anni