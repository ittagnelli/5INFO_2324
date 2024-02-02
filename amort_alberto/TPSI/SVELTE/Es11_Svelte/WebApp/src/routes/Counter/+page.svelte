
<script>
    import Counter from "./counter.svelte";

	let contatore = 0; // stato di un contatore
    function incremente() {
        contatore++;
    }
</script>

<h1>Page Counter !!!</h1>

<h2>il valore del contatore vale: {contatore}</h2>

<Counter bind:counter={contatore}/>