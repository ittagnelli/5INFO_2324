<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let counter2 = 0;

    function incre_counter(){
        counter2 += 2;
        emit_event("incr");
    }

    function decre_counter(){
        counter2 -= 3;
        emit_event("decr");
    }

    function emit_event(tipo){
        dispatch("contatore", {
            tipo: tipo,
            valore: counter2,
        })
    }
</script>

<div class="contanier">
    <button class="pulsante" on:click={decre_counter}>
        <span class="material-symbols-outlined icon">remove</span>
    </button>
    <div class="number">
        {counter2}
    </div>
    <button class="pulsante" on:click={incre_counter}>
        <span class="material-symbols-outlined icon">add</span>
    </button >
</div>

<style>
    .contanier{
        border: 4px solid #D43C2F;
        display: flex;
        justify-content: space-between;
        border-radius: 30px;
        width: 300px;
        padding: 10px;
        margin-top: 10px;
    }

    .pulsante{
        display: flex;
        align-items: center;
    }

    button{
        border: none;
        background: none;
    }

    .icon{
        font-size: 2.5rem;
        color: #F09C00;
        font-weight: bolder;
    }

    .icon:hover{
        color: #D43C2F;
        cursor: pointer;
    }

    .icon:active{
        text-shadow: 1px 1px 10px #D43C2F;
    }

    .number{
        font-size: 4rem;
        font-family: 'Bungee Spice', cursive;
    }
</style>