<script>
    import Counter from "../../lib/components/counter.svelte";
    import Doublecounter from "../../lib/components/doublecounter.svelte";
    let contatore =0;
    let double_contatore=0;
    let numeri= [1,7,2,6,9,10];
    let sottolineato=true;
    let doppio;
    $:doppio=contatore *2;
</script>
<h1>Pagina Counter! ! !</h1>
<h2 class:sottolineato>
il valore del contatore vale:{contatore}
</h2>


<h2 class={contatore<5 ? 'rosso' : 'verde'}>
il valore del contatore vale:{contatore}</h2>
<h2>il suo doppio vale {doppio}</h2>
<style>
    .rosso{color: red;}
    .verde{color: green;}
    .sottolineato{text-decoration: underline;}
</style>

<Counter bind:contatore={contatore} /> 
<ul>
    {#each numeri as numero,indice}
    <li>numeri[{indice}]:{numero}</li>
        
    {/each}
</ul>


<!----
 <h2>Il valore del contatore vale: {double_contatore}</h2>
<Doublecounter bind:double_contatore={double_contatore} />-->







