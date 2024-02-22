

<script>
    import input from "../../lib/components/input.svelte";
    let nome,cognome,eta;
    let confermato =false;
</script>

    


<h1>input page</h1>

Nome<input bind:value={nome}>
Cognome<input bind:value={cognome}>
Eta<input bind:value={eta}>

<br><br>

confermato<input type="checkbox" bind:checked={confermato}>

<br><br>

Io sono {nome} {cognome} e ho {eta} anni

<br><br>

<button disabled={!confermato}>Invia</button>

