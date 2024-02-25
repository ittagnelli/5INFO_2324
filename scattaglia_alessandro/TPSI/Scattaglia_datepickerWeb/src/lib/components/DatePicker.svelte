<script>
    import Giorno from "./giorno.svelte";
    import Mese from "./mese.svelte";
    import Anno from "./anno.svelte";

    import { store_giorno, store_mese, store_anno } from "../js/store.js";

    let buttonClicked = false;
    let giorno1 = "";
    let mese1 = "";
    let anno1 = "";
    function handleSelezione() {
        buttonClicked = true;

        giorno1 = $store_giorno;
        mese1 = $store_mese;
        anno1 = $store_anno;
    }
</script>

{#if buttonClicked}
    <h1>
        L'utente ha selezionato {giorno1} - {mese1} - {anno1}
    </h1>
{:else}
    <h1>L'utente ha selezionato GG - MM - AAAA</h1>
{/if}

<div class="container">
    <Giorno />
    <Mese />
    <Anno />
    <button class="button1" on:click={handleSelezione}>SELEZIONA</button>
</div>

<style>
    * {
        zoom: 130%;
    }
    h1 {
        text-align: center;
        padding-top: 80px;
    }
    .container {
        width: 300px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .button1 {
        margin-top: 8px;
        width: auto;
        height: 30px;
    }
</style>
