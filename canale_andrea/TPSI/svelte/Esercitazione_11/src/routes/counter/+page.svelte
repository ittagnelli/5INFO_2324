<script>
    import Counter from "../../lib/components/counter.svelte";
    import DoubleCounter from "../../lib/components/double_counter.svelte";

    let contatore = 69;

    let numeri = [1, 2, 3, 4, 5, 6, 7];
    let sottolineato = false;
    let doppio;

    $: doppio = contatore * 2;
    $: sottolineato = !Boolean(contatore % 2);

    function decrement() {
        alert("Decrement");
    }

    function increment() {
        alert("Increment");
    }
</script>

<section>
    <h1>Pagina Counter!!!</h1>
    <h2 class:sottolineato>Il valore del contatore e': {contatore}</h2>
    <h3>Il valore di doppio è: {doppio}</h3>
    <Counter bind:count={contatore}/>
    <!-- component binding [e' biridezionale]-->
    <!-- <componente bind:props={variabile_locale} -->

    <h3>Double Counter</h3>
    <DoubleCounter on:decrement={decrement} on:increment={increment} />

    {#each numeri as numero}
        <p>{numero}</p>
    {/each}
</section>

<style>
    .rosso {
        color: red;
    }

    .verde {
        color: green;
    }

    .sottolineato {
        text-decoration: underline;
    }
</style>