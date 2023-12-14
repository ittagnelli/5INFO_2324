<script>
    let nome, cognome, eta, residenza;
    let confermato = false;
</script>

<h5>Input Page</h5>

<p>
    Nome <input bind:value = {nome}>
    Cognome <input bind:value = {cognome}>
    Età <input bind:value = {eta}>
    Residenza <input bind:value = {residenza}>
</p>
<p>
    Confermato <input type="checkbox" bind:checked = {confermato}>
</p>

<p>Io sono {nome} {cognome} ed ho {eta} anni e abito a {residenza}</p>

<button disabled = {!confermato}>Invia</button>


<style>
    h5
    {
        margin-top: -8rem;
        text-align: left;
    }
    p
    {
        text-align: left;
        font-size: 2rem;
    }
    button
    {
        float: left;
    }
</style>