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

<div class="container">
    <h1>Welcome to SvelteKit</h1>

    <form method="POST">
        <div><label for="nome">Nome</label></div>
        <div>
            <input
                type="text"
                name="nome"
                id="nome"
                size="40"
                bind:value={nome}
            />
            <p class={error && nome?.length == 0 ? "" : "hidden"}>
                Nome invalido
            </p>
        </div>
        <div><label for="cognome">Cognome</label></div>
        <div>
            <input
                type="text"
                name="cognome"
                id="cognome"
                size="40"
                bind:value={cognome}
            />
            <p class={error && cognome?.length == 0 ? "" : "hidden"}>
                Cognome invalido
            </p>
        </div>
        <div><label for="eta">Età</label></div>
        <div>
            <input
                type="number"
                name="eta"
                id="eta"
                size="15"
                bind:value={eta}
            />
            <p class={error && eta?.length == 0 ? "" : "hidden"}>
                Età invalida
            </p>
        </div>
        <div><input type="submit" /></div>
    </form>

    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>Cognome</td>
                <td>Età</td>
                <td>Edit</td>
                <td>Remove</td>
            </tr>
        </thead>
        <tbody>
            {#each data.utenti as utente}
                <tr>
                    <td>{utente.id}</td>
                    <td>{utente.nome}</td>
                    <td>{utente.cognome}</td>
                    <td>{utente.eta}</td>
                    <td>
                        <buttun class="edit">Edit</buttun>
                    </td>
                    <td>
                        <buttun class="remove">Remove</buttun>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    p {
        color: red;
    }

    .hidden {
        display: none;
    }

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
        width: 100%;
        height: 30px;
        font-weight: bolder;
    }

    .remove {
        background-color: red;
        border-color: red;
    }
</style>
