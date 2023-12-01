
<script>
    import Counter from "./counter.svelte";
    import DoubleCounter from "./double_counter.svelte";

	let contatore = 0; // stato di un contatore    
    let doppiocont=0;
    let numeri = [1, 7, 2, 6, 9, 10];
    let sottolineato =true;
    let doppio;

    $: doppio = contatore *2;
    function incremente() {
        contatore++;
        doppiocont++;

    }

    
</script>

<h1>Page Counter !!!</h1>
<h2>Il suo doppio vale {doppio}</h2>

<h2 class:sottolineato>il valore del contatore vale: {contatore}</h2>

<h2 class={contatore <5 ? 'rosso': 'verde'}> il valore del contatore vale: {contatore}</h2>



<Counter bind:counter={contatore}/>

<ul>
    {#each numeri as numero, indice}
    <li> numeri[{indice}]:{numero}</li>
    {/each}
</ul>

<h2>il valore del contatore vale : {doppiocont}</h2>

<DoubleCounter bind:dp={doppiocont}/>


<style>
    .rosso {color: red;}
    .verde  {color: green;}
    .sottolineato {text-decoration: underline;}
</style>