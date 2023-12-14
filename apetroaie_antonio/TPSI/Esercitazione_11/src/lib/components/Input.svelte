<script>
    let nome, cognome , eta;
    let confermato = false;
</script>

<h1> Input Page</h1>

Nome <input bind:value={nome}>
cognome <input bind:value={cognome}>
eta <input bind:value={eta}>

<br><br>

confermato <input type ="checkbox" bind:checked={confermato}>

<br><br>


io sono {nome} {cognome} ed ho {eta} anni 

<br><br>


<button disabled ={!confermato}>Invia</button>