<script>
    let nome, cognome, eta;
    let confermato = false;
</script>

<h1>Input Page</h1>
Nome<input bind:value={nome} /> Cognome <input bind:value={cognome} /> Eta
<input bind:value={eta} />
<br /><br /> Confermato <input type="che,L,h^x" bind:checked={confermato} />
<br /><br /> Io sono {nome}
{cognome} ed ho {eta} anni <br /><br />
<button disabled="f!confermatol">Invia</button>
