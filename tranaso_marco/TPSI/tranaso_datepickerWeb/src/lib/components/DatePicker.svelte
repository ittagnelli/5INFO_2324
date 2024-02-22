<script>
    import Mese from "./mese.svelte";
    import Giorno from "./giorno.svelte";
    import Anno from "./anno.svelte";
    import { createEventDispatcher } from "svelte";
    import { store_giorno } from "../js/store";
    import { store_mese } from "../js/store";
    import { store_anno } from "../js/store";
    const dispatch=createEventDispatcher();
    
    let giorno1 = $store_giorno="GG";
    let mese1 = $store_mese="MM";
    let anno1 = $store_anno="AAAA";
    
    function stampa(){
        giorno1 = $store_giorno;
        mese1 = $store_mese;
        anno1 = $store_anno;
    }
</script>

<h1>
    L'utente ha selezionato {giorno1}-{mese1}-{anno1}
</h1>

<div class="container">
    <Giorno />
    <Mese />
    <Anno />
</div>

<button on:click={stampa}>
    SELEZIONA
</button>

<style>
    div {
        display: flex;
        justify-content: center;
        column-gap: 5px;
    }
    h1{
        text-align: center;
    }
</style>
