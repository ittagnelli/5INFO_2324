<script>
    import {store_mese} from './store';
    const grigio=false;

    const set_1=()=>{$store_mese="Gennaio";}
    const set_2=()=>{$store_mese="Febbraio";}
    const set_3=()=>{$store_mese="Marzo";}
    const set_4=()=>{$store_mese="Aprile";}
    const set_5=()=>{$store_mese="Maggio";}
    const set_6=()=>{$store_mese="Giugno";}
    const set_7=()=>{$store_mese="Luglio";}
    const set_8=()=>{$store_mese="Agosto";}
    const set_9=()=>{$store_mese="Settembre";}
    const set_10=()=>{$store_mese="Ottobre";}
    const set_11=()=>{$store_mese="Novembre";}
    const set_12=()=>{$store_mese="Dicembre";}
</script>

<main>
    <button on:click={set_1} class:grigio={$store_mese=="Gennaio"}>Gennaio</button>
    <button on:click={set_2} class:grigio={$store_mese=="Febbraio"}>Febbraio</button>
    <button on:click={set_3} class:grigio={$store_mese=="Marzo"}>Marzo</button>
    <button on:click={set_4} class:grigio={$store_mese=="Aprile"}>Aprile</button>
    <button on:click={set_5} class:grigio={$store_mese=="Maggio"}>Maggio</button>
    <button on:click={set_6} class:grigio={$store_mese=="Giugno"}>Giugno</button>
    <button on:click={set_7} class:grigio={$store_mese=="Luglio"}>Luglio</button>
    <button on:click={set_8} class:grigio={$store_mese=="Agosto"}>Agosto</button>
    <button on:click={set_9} class:grigio={$store_mese=="Settembre"}>Settembre</button>
    <button on:click={set_10} class:grigio={$store_mese=="Ottobre"}>Ottobre</button>
    <button on:click={set_11} class:grigio={$store_mese=="Novembre"}>Novembre</button>
    <button on:click={set_12} class:grigio={$store_mese=="Dicembre"}>Dicembre</button>
</main>

<style>
    main{
        border: 2px solid gray;
        width: 20%;
        height: 60%;
    }
    button{
        border: none;
        background-color: white;
        width: 100%;
        font-size: 15px !important;
        margin-bottom: 1.7%;
    }
    button:hover{
        background-color: gray;
    }
    .grigio{background-color: gray;}
</style>