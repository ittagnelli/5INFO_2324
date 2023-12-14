<script>
	import WhoAmI from './../../components/who_am_i.svelte';
    let nome="", cognome="", eta="", confermato=false, cerca=false

    function set_cerca(){
        cerca = true
    }
</script>

<h1>Input Page</h1>

Nome: <input bind:value={nome}><br>
Cognome: <input bind:value={cognome}><br>
Età: <input bind:value={eta}>

<br><br>

Confermato: <input type='checkbox' bind:checked={confermato}>
<br>

<button on:click={set_cerca} disabled={!confermato}>Cerca</button>
<br><br>

<WhoAmI enable={cerca && confermato}  nome={nome} cognome={cognome} eta={eta}/>





