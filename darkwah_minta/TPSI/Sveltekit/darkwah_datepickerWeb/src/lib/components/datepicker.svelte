<script>

    import Giorno from "./giorno.svelte";
    import Mese from "./mese.svelte";
    import Anno from "./anno.svelte";


    import {store_num_g} from '../js/store.js';
    import {store_num_m} from '../js/store.js';
    import {store_num_a} from '../js/store.js';

   let buttonClicked = false;
   let giorno2="";
   let mese2="";
   let anno2="";


    function metti ()
    {
        buttonClicked = true;
        giorno2 = $store_num_g;
        mese2 = $store_num_m;
        anno2 = $store_num_a;
        
    }

</script>

{#if buttonClicked}
<h2 id="frase_agg">L'utente ha selezionato {giorno2} - {mese2} - {anno2}</h2>
{:else}
<h2 id="frase_agg">L'utente ha selezionato GG - MM - AAAA</h2>
{/if}
<div id="tutto">
    <div id="sx">
        <form >
            <div id="data">
                <Giorno/>

                <Mese/>
        
                <Anno/>
            </div>
        </form>
    </div>
    <div id="dx">
        
        <button on:click={metti}>SELEZIONE</button>
        

    </div>
    
</div>



<style>
    button
    {
        width: 10rem;
        height: 3rem;
        color: gray;
        font-size: 1rem;
        border-radius: 0.5rem;
        border: 2px solid gray;
        font-weight: bold;
        
    }
    button:hover
    {
        background-color: rgb(216, 216, 216);
    }
    button:active
    {
        background-color: gray;
        color: white;
        border: 2px solid white;
    }

    h2
    {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 4rem;
    }

    /*suddivido la parte data e bottone in due destra e sinistra*/
    form
    {
        width: 30rem;
        height: 20rem;
        margin: auto;
        
    }
    #data
    {
        height: 20rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin: auto;
       
    }
    


    #tutto
    {
        width: 50rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        
        margin: auto;
        

    }
</style>