<script>
    import Counter from "../../lib/components/counter.svelte";
    import DoubleCounter from "../../lib/components/double_counter.svelte";
    let contatore = 69;
</script>

<section>
    <h1>Pagina Counter!!!</h1>
    <h2>Il valore del contatore e': {contatore}</h2>

    <Counter bind:count={contatore} />
    <!-- component binding [e' biridezionale]-->
    <!-- <componente bind:props={variabile_locale} -->

    <h3>Double Counter</h3>
    <DoubleCounter />
</section>

<style></style>