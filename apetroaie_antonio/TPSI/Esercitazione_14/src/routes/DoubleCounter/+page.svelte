
<script>
    import Counter from "../../lib/components/double_counter.svelte";


    import WhoAmI from "../../lib/components/Counter.svelte";
    let DoubleCounter = 0;

</script>

<h1>Pagina Double Counter !!!</h1>

<h2>il valore del contatore vale :{DoubleCounter}</h2>

<Counter bind:counter={DoubleCounter}/>
<WhoAmI/>   

