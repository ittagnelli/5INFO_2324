<script>
    import Counter from "../../lib/components/counter.svelte";
    import Doublecounter from "../../lib/components/doublecounter.svelte";
    let contatore =0;
    let double_contatore=0;
    function gestisci_evento(evento){
        alert(`${evento.detail.tipo}--${evento.detail.valore}`);
      
    }
</script>
<h1>Pagina Counter! ! !</h1>



<h2 class={contatore<5 ? 'rosso' : 'verde'}>
il valore del contatore vale:{contatore}</h2>

<style>
    .rosso{color: red;}
    .verde{color: green;}
    
</style>

<Counter bind:contatore={contatore} on:contatore={gestisci_evento}/> 


 <h2>Il valore del contatore vale: {double_contatore}</h2>
<Doublecounter bind:double_contatore={double_contatore} />







