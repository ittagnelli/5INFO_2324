<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap"rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kablammo&display=swap" rel="stylesheet">
</svelte:head>

<script>
    

    function counter_incr () {
        counter += 3;
    }

    function counter_decr () {
        counter -= 3;
    }

    export let counter = 0;

</script>

<div class="container">
    <div class="pulsante">
        <button on:click={counter_decr}>
            <span class="material-symbols-outlined icon">remove</span>
        </button>
    </div>
    <div class="number" >
        {counter}
    </div>
    <div class="pulsante">
        <button on:click={counter_incr}>
            <span class="material-symbols-outlined icon">add</span>
        </button>
    </div>
</div>

<style>
    .container {
        border: 4px solid blue;
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
        color: violet;
        font-weight: bolder;
    }

        .icon:hover {
            color: blueviolet;
            cursor: pointer;
        }

        .icon:active {
            text-shadow: 1px 1px 10px blue;
        }

    .number {
        font-size: 4rem;
        font-family: 'Kablammo';
        color: blueviolet;
    }

</style>