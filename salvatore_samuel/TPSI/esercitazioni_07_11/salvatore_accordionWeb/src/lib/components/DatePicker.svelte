<script>
    let giorno, mese, anno;
    function stampaValori() {
        const stringaDaStampare = `L'utente ha selezionato ${giorno} - ${mese} - ${anno}`;
        document.getElementById("output").textContent = stringaDaStampare;
    }
    import Anno from "./Anno.svelte";
    import Giorno from "./Giorno.svelte";
    import Mese from "./Mese.svelte";
</script>

    <div class="container">
        <h1 id="output">L'utente ha selezionato GG - MM - AAAA</h1>
    </div>
    <div class ="container">
    <Giorno bind:giornoselezionato={giorno} />
    <Mese bind:meseselezionato={mese} />
    <Anno bind:annoselezionato={anno} />
        <form>
            <button on:click={stampaValori}>SELECT!</button>
        </form>
    </div>

<style>
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