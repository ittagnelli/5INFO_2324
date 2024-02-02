
<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link  href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap">
</svelte:head>

<script>
    export let counter = 0;

    function decremento() {
        counter -= 1;
        
    }

    function incremento() {
        counter += 1;
        
    }

</script>

<div class="container">
    <div class="pulsante">
        <button on:click={decremento}>
            <span class="material-symbols-outlined icon">remove</span>
        </button>
    </div>
    <div class="number">
        {counter}
    </div>
    <div class="pulsante">
        <button on:click={incremento}>
            <span class="material-symbols-outlined icon">Add</span>
        </button>
    </div>
</div>

<style>
    .container{
        border: 4px solid red;
        display: flex;
        justify-content: space-between;
        border-radius: 20px;
        width: 300px;
        padding: 20px;
        margin: auto;
        margin-top: 15%;

    }

    .number{
        font-size: 80px;
        font-weight: bolder;
        
        
    }

    .icon:hover{
        color: red;
        font-size: 80px;
        cursor: pointer;
    }

    .icon{
        color: rgb(172, 172, 57);
        font-size: 80px;
    }

    button{
        border: none;
        background: none;
    }

    .pulsante{
        display: flex;
        align-items: center;
    }
</style>