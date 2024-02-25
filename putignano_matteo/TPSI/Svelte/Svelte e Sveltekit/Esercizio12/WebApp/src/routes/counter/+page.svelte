<script>
    import Counter from "../../lib/components/counter.svelte";
    import Double_Counter from "../../lib/components/double_counter.svelte";
    let contatore = 0;
    let doppio_contatore = 0;
</script>

<h1>Pagina Counter!!!</h1>

<h2>Il valore del contatore contiene: {contatore}</h2>

<Counter bind:counter = {contatore} />

<br>

<h2>Il valore del double counter contiene: {doppio_contatore}</h2>

<Double_Counter bind:double_counter ={doppio_contatore} />