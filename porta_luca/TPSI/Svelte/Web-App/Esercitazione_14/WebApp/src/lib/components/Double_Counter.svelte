<svelte:head>
    <link href="https://fonts.googleapis.com/css2?
    family=Material+Symbols+Outlined:opsz, wght, FILL, GRAD@48,400,0,0" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Bungee+Spice&display=swap"
    rel="stylesheet">
</svelte:head>

<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch =createEventDispatcher();
    export let cont_doppio = 0;
    function counter_incr()  {
        cont_doppio += 2;
        emit_event('incr');
    }

    function counter_decr()  {
        cont_doppio -= 3;
        emit_event('decr');
    }
    function emit_event(tipo){
        dispatch('cont', {tipo: tipo, valore: cont});
    }
    
</script>

<main>
    <div class="container">
        <div class="pulsante">
            <button on:click={counter_decr}><span class="material-symbols-outlined icon">-</span></button>
        </div>
        <div class="number">
            {cont_doppio}
        </div>
        <div class="pulsante">
            <button on:click={counter_incr}><span class="material-symbols-outlined icon">+</span></button>
        </div>
    </div>
</main>

<style>
.container{
        border: 4px solid #D43C2F;
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
    border: none;
    background: none;
}
.icon{
    font-size: 2.5rem;
    color: #F09C00;
    font-weight: bolder;
}
.icon {
font-size: 2.5rem;
color: #F09C00; font-weight: bolder;
}
.icon:hover {
color: #D43C2F;
cursor: pointer;
}
.icon:active {
text-shadow: 1px 1px 10px #D43C2F;
}
.number {
font-size: 4rem;
font-family: 'Bungee Spice', cursive;
}
</style>