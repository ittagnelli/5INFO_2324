<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" />

</svelte:head>

<script>
    import Counter from "../../lib/components/counter.svelte";
    import DoubleCounter from "../../lib/components/double_counter.svelte";

    let contatore = 0;
    let b_contatore = 0;
    
</script>

<h5>Pagina Counter!!!</h5>

<h4>Il valore del contatore vale: {contatore}</h4>

<Counter bind:counter = {contatore}/>

<h4>Il valore del contatore vale: {b_contatore}</h4>

<DoubleCounter  bind:counter = {b_contatore}/>

<style>
    h5
    {
        font-size: 3rem;
        margin-top: -10rem;
        text-align: left;
    }
    h4
    {
        font-size: 3.5rem;
        text-align: left;
    }
</style>