
<script>

import Counter from "../../lib/components/Counter.svelte";

    let contatore = 0;
    let numeri =[ 1, 7, 2, 6, 9, 10];
    let sottolineato = true;
    let doppio;
    $: doppio = contatore *2;


    $: sottolineato= Boolean(contatore%2);

</script>

<h1>Pagina Counter !!!</h1>

<h2 class="sottolineato">

Il valore del contatore vale :{contatore}

</h2>


<h2 class:sottolineato>

    Il valore del contatore vale :{contatore*2}
    
    </h2>

<Counter bind:counter={contatore}/>

<ul>

{#each numeri as numero, indice  }

<li>numeri[{indice}]:{numero}</li>
{/each}


</ul>


<style>

    .sottolineato { text-decoration: underline;}

</style>

