<script>
    let nome = "",
        cognome = "",
        età = "";
        let confermato = false;
</script>

<main>
    <h1>Input Page</h1>

    Nome:<input bind:value={nome} /> &nbsp;&nbsp;&nbsp;
    Cognome: <input bind:value={cognome} />&nbsp;&nbsp;&nbsp;
    Età: <input bind:value={età} />

    <br /><br />

    Confermato <input type="checkbox" bind:checked={confermato}>
    <br><br>
    <h2>
        Io sono {nome} {cognome} ed ho {età} anni.
    </h2>
    <br><br>
    <button disabled={!confermato}>Invia</button>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
    }
    h1 {
        font-size: xx-large;
    }
</style>
