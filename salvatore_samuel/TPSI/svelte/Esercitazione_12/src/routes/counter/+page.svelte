<script>
    import Counter from "../../lib/components/counter.svelte";
    let contatore = 0;
    import DoubleCounter from "../../lib/components/double_counter.svelte";
    let dcontatore = 0;
</script>

<h2>Il valore del contatore vale : {contatore}</h2>

<Counter bind:counter={contatore} />

<h2>Il valore del contatore doppio vale : {dcontatore}</h2>

<DoubleCounter bind:counter={dcontatore} />