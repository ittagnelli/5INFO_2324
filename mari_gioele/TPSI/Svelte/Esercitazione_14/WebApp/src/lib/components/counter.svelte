<svelte:head>
    <link href="https://fonts.googleapis.com/css2?
    family=Material+Symbols+Outlined:opsz, wght, FILL, GRAD@48,400,0,0" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Bungee+Spice&display=swap"
    rel="stylesheet">
</svelte:head>

<script>
    let un=true, verde = true;
    export let cont = 0;
    let numeri=[1,2,3,4,5,6,7,8,9];
    function counter_incr()  {cont += 1;}
    function counter_decr()  {cont -= 1;}
</script>

<main>
    <h1>Pagina Counter!!!</h1>
    <div class="container">
        <div class="pulsante">
            <button on:click={counter_decr}><span class="material-symbols-outlined icon">-</span></button>
        </div>
        <div class="number">
            {cont}
        </div>
        <div class="pulsante">
            <button on:click={counter_incr}><span class="material-symbols-outlined icon">+</span></button>
        </div>
    </div>
    <br><br>
    {#each numeri as numero, i}
        <li class="verde">numeri[{i}]={numero}</li>
    {/each}
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
.verde{color: lime;}
</style>