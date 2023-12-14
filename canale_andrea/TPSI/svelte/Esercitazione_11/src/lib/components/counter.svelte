<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet">
</svelte:head>

<script>
    export let count = 0;
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function increment() {
        count++;
        dispatch("increment", count);
    }

    function decrement() {
        count--;
        dispatch("decrement", count);
    }
</script>

<section>
    <div class="container">
        <div class="pulsante">
            <button on:click={() => count--}>   <!-- inline handler   -->
                <span class="material-symbols-outlined icon">remove</span>
            </button>
        </div>
        
        <div class="number">
            {count}
        </div>

        <div class="pulsante">
            <button on:click={increment}>
                <span class="material-symbols-outlined icon">add</span>
            </button>
        </div>
    </div>
</section>

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
        background: none;
        border: none;
    }

    .icon {
        font-size: 2.5rem;
        font-weight: bolder;
        color: #F09C00;
    }

    .icon:hover {
        cursor: pointer;
        color: #d43c2f;
    }

    .icon:active {
        text-shadow: 1px 1px 10px #d43c2f;
    }

    .number {
        font-size: 4rem;
        font-family: 'Bungee Spice', cursive;
    }
</style>