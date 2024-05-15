<script>
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>

<form method="POST">
    <div><label for="name">Nome</label></div>
    <div><input type="text" name="name" id="name" size="40"></div>
    <div><label for="surname">Cognome</label></div>
    <div><input type="text" name="surname" id="surname" size="40"></div>
    <div><label for="age">Età</label></div>
    <div><input type="number" name="age" id="age" size="15"></div>
    <div><input type="submit"></div>
</form>

<ul>
    {#each data.utenti as utente}
        <li>{utente.nome} {utente.cognome} ha {utente.eta}</li>
    {/each}
</ul>