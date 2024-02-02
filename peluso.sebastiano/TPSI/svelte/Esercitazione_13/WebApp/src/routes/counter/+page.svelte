
<script>
    import Counter from '$lib/components/counter.svelte';
    import DoubleClounter from '$lib/components/doubleClounter.svelte';

    let contatore = 0;
    let contatore2 = 0;
    let numeri = [1,2,3,4,8,7,6,10];
    let sottolineato = true;

    $: doppio = contatore * 2;

    $: sottolineato = contatore2 %2;
    
    

</script>

<h1>Pagina Counter!!</h1>

<h2 class:sottolineato class={contatore <= 5 ? 'rosso': 'verde'}>Il valore del contatore vale : {contatore}</h2>

<h2>il suo doppio vale {doppio}</h2>




<Counter bind:counter={contatore}/>

<ul>
    {#each numeri as numero, indice}
        <li>numeri[{indice}]:{numero}</li>
    {/each}
</ul>

<h2>double counter</h2>

<h2 class:sottolineato>il valore del contatore vale : {contatore2}</h2>


<DoubleClounter bind:counter2={contatore2}/>



<style>
    .rosso{
        color: red;
    }

    .verde{
        color: green;
    }
    .sottolineato{
        text-decoration: underline;
    }
</style>

