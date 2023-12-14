<script>
    import {createEventDispatcher} from 'svelte';
    export let counter = 0;

    function counter_incr(){
        counter+=1;
    }
function counter_decr()
{
    counter-=1;
}
function emit_event(tipo)
{
    dispatch('contatore',{
    tipo:tipo,
    valore:counter
});
}
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Lexend&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="container">
    <div class="pulsante">
        <button on:click={counter_decr}>
            <span class="material-symbols-outlined icon">remove</span>
        </button>
    </div>
    <div class="number">
        {counter}
    </div>
    <div class="pulsante">
        <button on:click={counter_incr}>
            <span class="material-symbols-outlined icon"> add </span>
        </button>
    </div>
</div>

<style>
    .container {
        border: 4px solid #d43c2f;
        display: flex;
        justify-content: space-between;
        border-radius: 30px;
        width: 300px;
        padding: 10px;
    }

    .pulsante {
        display: flex;
        align-items: center;
    }

    button {
        border: none;
        background: none;
    }

    .icon {
        font-size: 2.5rem;
        color: #f09c00;
        font-weight: bolder;
    }

    .icon:hover {
        color: #d43c2f;
        cursor: pointer;
    }

    .icon:active {
        text-shadow: 1px 1px 10px #d43c2f;
    }

    .number {
        font-size: 4rem;
        font-family: 'bungee Spice', cursive;
    }
</style>