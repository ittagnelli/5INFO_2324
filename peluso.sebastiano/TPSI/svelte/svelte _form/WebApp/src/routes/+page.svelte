
<script>
    export let data;
    export let form;

    let nome;
    let cognome;
    let eta;

    let error = false;

    if (form?.form_error) {

        error = true;
        nome = form.form_vals.nome;
        cognome = form.form_vals.cognome;
        eta = form.form_vals.eta;


        
    }

</script>

<h1>Welcome to SvelteKit FORM Example</h1>

<form action="" method="post">
    <div><label for="nome">nome</label></div>
        <div>
            <input type="text" name="nome" size="40" bind:value={nome} >
            <p class={error && nome?.length == 0  ? '': 'hidden'}>nome invalido</p>
        </div>
    <div><label for="cognome">cognome</label></div>
        <div>
            <input type="text" name="cognome" size="40" bind:value={cognome}>
            <p class={error && cognome?.length == 0 ? '': 'hidden'}>cognome invalido</p>
        </div>
    <div><label for="eta">età</label></div>
        <div>
            <input type="number" name="eta" min="13" bind:value={eta}>
            <p class={error && eta?.length == 0 ? '': 'hidden'}>età invalido</p>
        </div>
    <div><input type="submit"></div>

</form>

<ul>
    {#each data.utenti as utente}
        <li>{utente.nome} {utente.cognome} ha eta di {utente.eta}</li>
    {/each}
</ul>

<style>

    p{
        color: red;
        font: bold;
    }

</style>
