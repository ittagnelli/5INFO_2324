<script>
    let giorno = 'GG';
    let mese = 'MM';
    let anno = 'AAAA';
    import Anno from "./Anno.svelte";
    import Giorno from "./Giorno.svelte";
    import Mese from "./Mese.svelte";
</script>

<main>
    <div class="container">
        <h1>L'utente ha selezionato {giorno} - {mese} - {anno}</h1>
        <br><br>
        <Giorno/>
        <Mese/>
        <Anno/>
        <form>
            <button type="button" id="idpulsante">SELECT!</button>
        </form>
    </div>
    
</main>

<style>
    main {
        display: flex;
        align-items: center;
    }
    h1 {
        text-align: center;
        padding-top: 10%;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    button {
        border: 2px solid black;
        border-radius: 2px;
        background-color: rgb(203, 203, 203);
        padding: 25%;
    }

    button:hover {
        cursor: pointer;
    }

</style>