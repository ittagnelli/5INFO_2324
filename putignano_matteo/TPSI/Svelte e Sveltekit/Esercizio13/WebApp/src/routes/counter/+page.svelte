<script>
    import Counter from "../../lib/components/counter.svelte";
    import Double_Counter from "../../lib/components/double_counter.svelte";
    let contatore = 0;
    let doppio_contatore = 0;
    let numeri = [1, 7, 2, 6, 9, 10];
</script>

<h1>Pagina Counter!!!</h1>

{#if contatore < 5}
    <h2 class="rosso">Il valore del contatore contiene: {contatore}</h2>
{:else}
    <h2 class="verde">Il valore del contatore contiene: {contatore}</h2>
{/if}

<Counter bind:counter = {contatore} />

<br>

{#if doppio_contatore < 5}
    <h2 class="rosso">Il valore del double contatore contiene: {doppio_contatore}</h2>
{:else}
    <h2 class="verde">Il valore del double contatore contiene: {doppio_contatore}</h2>
{/if}

<Double_Counter bind:double_counter = {doppio_contatore} />

<ul>
    {#each numeri as numero}
        <li>numeri[]:{numero}</li>
    {/each}
</ul>

<style>
    .rosso {color: red;}
    .verde {color: green;}
</style>