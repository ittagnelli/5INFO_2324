<script>
    import Counter from "../../lib/components/counter.svelte";
    import Doublecounter from "../../lib/components/doublecounter.svelte";
    let contatore =0;
    let double_contatore=0;
    
</script>
<h1>Pagina Counter! ! !</h1>

<h2>Il valore del contatore vale: {contatore}</h2>

<Counter bind:contatore={contatore} /> 

<h2>Il valore del contatore vale: {double_contatore}</h2>
<Doublecounter bind:double_contatore={double_contatore} />







