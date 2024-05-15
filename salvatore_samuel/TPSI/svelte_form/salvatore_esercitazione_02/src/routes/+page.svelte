<script>
    export let data;
</script>

<h1>Welcome to SvelteKit FORM Example</h1>

<form method="POST">
    <div><label for="nome">Nome</label></div>
    <div><input type="text" id="nome" name="nome" size="40"></div>
    <div><label for="cognome">Cognome</label></div>
    <div><input type="text" id="cognome" name="cognome" size="40"></div>
    <div><label for="eta">Età</label></div>
    <div><input type="number" id="eta" name="eta" min="15"></div>
    <div><input type="submit"></div>

</form>

<ul>
{#each data.utenti as utente} 
    <li>{utente.nome} {utente.cognome} {utente.eta}</li>
{/each}
</ul>