<script>
    import Counter from "../../lib/components/counter.svelte";
    import DoubleCounter from "../../lib/components/double_counter.svelte";

    let contatore = 0;
    let contatore2 = 0;
    let numeri = [1, 7, 2, 6, 9, 10];
    let sottolineato = true;

    $: doppio = contatore * 2;
    $: doppio2 = contatore2 * 2; 
    $: sottolineato = contatore2 % 2;
</script>

<h1>Pagina Counter!</h1>

<h2>Il valore del contatore vale: {contatore}</h2>
<h2>Il suo valore è doppio {doppio}</h2>

<Counter bind:counter={contatore}/>

<h2 class:sottolineato>Il valore del secondo contatore vale: {contatore2}</h2>
<h2>Il suo valore del secondo è doppio {doppio2}</h2>

<DoubleCounter bind:counter2={contatore2}/>

<ul>
    {#each numeri as numero, indice}
        <li>numeri[{indice}]:{numero}</li>
    {/each}
</ul>

<style>
    .sottolineato{
        text-decoration: underline;
    }
</style>