<svelte:head>
	
</svelte:head>

<script>
    import { createEventDispatcher } from "svelte";
    import { store_counter } from "../lib/js/store";

    const dispatch = createEventDispatcher()
	export let counter=0
    export let doppio=0


    function counter_incr(){
        counter++
        $store_counter = counter
        emit_event("incr")
    }

    function counter_decr(){
        counter--
        $store_counter = counter
        emit_event("decr")
    }

    $: $store_counter = counter 

    $: doppio = counter * 2

    function emit_event(tipo){
        dispatch('cont', {
            tipo: tipo,
            valore: counter
        })
    }
</script>

<div class="container">
    <div class="pulsante">
        <button on:click={counter_decr}>-</button>
    </div>

    <div class="number">
        {counter}
    </div>

    <div class="pulsante">
        <button on:click={counter_incr}>+</button>
    </div>

</div>


<style>
    .container{
        border: 4px solid #d43c2f;
        display: flex;
        justify-content: space-between;
        border-radius: 30px;
        width: 300px;
        padding: 10px;
    }
    .pulsante{
        display: flex;
        align-items: center;
    }
    button{
        font-size: 4rem;
        border: none;
        background: none;
    }
    button:hover{
        cursor: pointer;
    }

    .number{
        font-size: 4rem;
    }

    /* .icon{
        font-size: 2.5rem;
        color: #f09c00;
        font-weight: bolder;
    } */
</style>