<script>
    import DoubleCounter from "../../lib/components/double_counter.svelte";
    import Counter from "../../lib/components/counter.svelte";
    let contatore = 0;
    let contatore1 = 0;
</script>

<main>
    <h1>Pagina counter!!!</h1>
    <h2>Il valore del contatore vale: {contatore}</h2>
    <Counter bind:contatore />
    <h2>Il valore del contatore vale: {contatore1}</h2>
    <DoubleCounter bind:contatore1 />
</main>

<style>
    main {
        width: 100%;
        height: 100%;
    }
    h1 {
        font-size: xx-large;
    }
    main {
        width: 100%;
        height: 100%;
    }
</style>
