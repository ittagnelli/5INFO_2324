<script>
    export let data; // riceve i dati forniti dal backend durante il load della pagina
    export let form;

    let id, nome, cognome, eta;
    let action = "create";
    let error = false;

    function edit_user(user) {
        action = "update";
        id = user.id;
        nome = user.nome;
        cognome = user.cognome;
        eta = user.eta;
    }
</script>

<div class="container">
    <h1>Welcome to SvelteKit FORM Example</h1>

    <form method="post" action="?/create">
        {#if action == "update"}
            <input type="hidden" name="id" bind:value={id} />
        {/if}
    </form>

    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>Cognome</td>
                <td>Eta</td>
                <td>Edit</td>
                <td>Remove</td>
            </tr>
        </thead>
        <tbody>
            {#each data.utenti as utente}
                <tr>
                    <td>#?</td>
                    <td>{utente.nome}</td>
                    <td>{utente.cognome}</td>
                    <td>{utente.eta}</td>
                    <td>
                        <button class="edit" on:click={() => edit_user(utente)}
                            >Edit</button
                        >
                    </td>
                    <td>
                        <button class="remove">Remove</button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .container {
        width: 45%;
        margin: auto;
    }
    table,
    td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 10px;
        margin-top: 50px;
    }
    thead {
        font-size: 20px;
        font-weight: bolder;
    }
    .edit,
    .remove {
        color: white;
        background-color: green;
        border-color: green;
        border-radius: 5px;
        width: 100px;
        height: 30px;
        font-weight: bolder;
    }
    .remove {
        background-color: red;
        border-color: red;
    }
    form {
        width: 50%;
        display: grid;
        grid-template-columns: 1fr 4fr;
        row-gap: 15px;
    }
    input,
    label {
        height: 25px;
        border-radius: 6px;
    }
    label {
        line-height: 25px;
    }
</style>
