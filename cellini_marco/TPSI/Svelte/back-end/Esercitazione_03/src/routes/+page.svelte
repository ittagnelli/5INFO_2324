<script>
    export let data;
    export let form;
    let nome, 
        cognome,
        eta,
        error = false;

    if (form?.form_error) {
        error = true;
        nome = form.form_vals.nome;
        cognome = form.form_vals.cognome;
        eta = form.form_vals.eta;
    }

    console.log(form);
</script>

<h1>Welcome to SvelteKit</h1>

<form method="POST">
    <div><label for="nome">Nome</label></div>
    <div>
        <input type="text" name="nome" id="nome" size="40" bind:value={nome} />
        <p class={error && nome?.length == 0 ? '' : 'hidden'}>Nome invalido</p>
    </div>
    <div><label for="cognome">Cognome</label></div>
    <div>
        <input type="text" name="cognome" id="cognome" size="40" bind:value={cognome}/>
        <p class={error && cognome?.length == 0 ? '' : 'hidden'}>Cognome invalido</p>
    </div>
    <div><label for="eta">Età</label></div>
    <div>
        <input type="number" name="eta" id="eta" size="15" bind:value={eta}/>
        <p class={error && eta?.length == 0 ? '' : 'hidden'}>Età invalida</p>
    </div>
    <div><input type="submit" /></div>
</form>

<ul>
    {#each data.utenti as utente}
        <li>{utente.nome} {utente.cognome} ha {utente.eta}</li>
    {/each}
</ul>

<style>
    p {
        color: red;
    }
    
    .hidden {
        display: none;
    }
</style>