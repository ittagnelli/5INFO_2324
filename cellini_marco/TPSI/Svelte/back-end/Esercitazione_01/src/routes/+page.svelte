<script>
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>

<ul>
    {#each data.utenti as utente}
        <li>{utente}</li>
    {/each}
</ul>