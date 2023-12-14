
<script>
    import Counter from "../../lib/components/Counter.svelte";

    import WhoAmI from "../../lib/components/Counter.svelte";
    let contatore = 0;

</script>

<h1>Pagina Counter !!!</h1>

<h2>il valore del contatore vale :{contatore}</h2>

<Counter bind:counter={contatore}/>
<WhoAmI/>   

