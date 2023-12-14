<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" />

</svelte:head>

<script>
    import Counter from "../../lib/components/counter.svelte";
    import DoubleCounter from "../../lib/components/double_counter.svelte";


    let contatore = 0;
    let b_contatore = 0;
    let numeri = [1, 7, 2, 6, 9, 10];
    let sottolineato = true;
    let doppio;

    $: doppio = contatore * 2;

    $:sottolineato = (b_contatore % 2) == 0;

    function gestisci_evento(evento) {
        alert(`${evento.detail.tipo} -- ${evento.detail.valore}`);
    }
</script>

<h5>Pagina Counter!!!</h5>



<h4 class:sottolineato>
    Il valore del contatore vale: {contatore}
</h4>
<h4>
    Il suo doppio vale {doppio}
</h4>


<Counter bind:counter = {contatore} on:contatore = {gestisci_evento}/>

<ul>
    {#each numeri as numero, indice}
        <li>numeri[{indice}]:{numero}</li>
    {/each}
</ul>

<h4>Il valore del contatore vale: {b_contatore}</h4>

<DoubleCounter  bind:counter = {b_contatore} on:contatore = {gestisci_evento}/>



<style>
    h5
    {
        font-size: 2rem;
        margin-top: -10rem;
        text-align: left;
    }
    h4
    {
        margin-top: -2.5rem;
        font-size: 2.5rem;
        text-align: left;
    }

    .rosso {color: red;}
    .verde {color: green;}
    .sottolineato {text-decoration: underline;}
    

    li
    {
        text-align: left;
        font-size: 1.5rem;
        
    }
    ul
    {
        margin-top: -0.1rem;
    }
    
</style>