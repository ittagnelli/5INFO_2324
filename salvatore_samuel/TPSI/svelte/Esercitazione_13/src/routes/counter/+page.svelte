<script>
    import Counter from "../../lib/components/counter.svelte";
    let contatore = 0;
    import DoubleCounter from "../../lib/components/double_counter.svelte";
    let dcontatore = 0;
    let numeri = [1, 7, 2, 6, 9, 10];
    let sottolineato = true;
    let doppio;

    $: doppio = contatore *2;
</script>

<h2 class:sottolineato>Il valore del contatore vale : {contatore}</h2>
<h2>Il suo doppio vale {doppio}</h2>
<Counter bind:counter={contatore} />

<h2 class:sottolineato ={dcontatore %2 == 0 ? 'sottolineato' : ''}>Il valore del secondo contatore ("- = -3 e + = +2") vale : {dcontatore}</h2>
<DoubleCounter bind:counter={dcontatore} />


<ul>
    {#each numeri as numero, indice}
        <li>numeri[{indice}]:{numero}</li> 
    {/each}
</ul>

<style>
    .rosso {color: red;}
    .verde{color: green;}
    .sottolineato {text-decoration: underline;}
</style>