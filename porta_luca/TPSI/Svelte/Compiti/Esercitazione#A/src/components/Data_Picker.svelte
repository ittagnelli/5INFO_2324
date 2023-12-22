<script>
    import Item_Anno from "./Item_anno.svelte";
    import Item_Giorno from "./Item_giorno.svelte";
    import Item_Mese from "./Item_mese.svelte";
    import {store_anno} from './store';
    import {store_mese} from './store';
    import {store_giorno} from './store';

    let Giorno="GG";
    let Mese="MM";
    let Anno="AAAA";
    function Trasform(){
        Anno=$store_anno;
        Mese=$store_mese;
        Giorno=$store_giorno;
    }
</script>

<main>
    <div class="output">
        <h1>L'utente ha selezionato: {Giorno} - {Mese} - {Anno}</h1>
    </div>
    <div class="contenitore">
        <div class="header">GG</div>
        <div class="header">MM</div>
        <div class="header">AAAA</div>
        <button class="pul" on:click={Trasform}>Select</button>

        <Item_Giorno />
        <Item_Mese />
        <Item_Anno />
        <div class="invisibile"></div>
    </div>
</main>

<style>
    main{
        margin: auto;
        width: 95%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1{
        color: blue;
    }
    button{background-color: none;}
    .contenitore{
        width: 75%;
        height: 50%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .header{
        padding-top: 20px;
        text-align: center;
        border: 2px gray solid;
        width: 20%;
        height: 10%;
    }
    .pul{
        background-color: none;
        border: 2px gray solid;
        text-align: center;
        width: 20%;
        height: 15%;
    }
    .invisibile{
        border: none;
        width: 20%;
        height: 60%;
    }
</style>