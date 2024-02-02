<script>
    import Counter from "../../lib/components/counter.svelte";
    import DoubleCounter from "../../lib/components/double_counter.svelte";
    let contatore = 69;
    let cont;
    let numberi = [1, 4, 6, 2, 8, 20, 5];
    let underline = true;
    let double;

    /* dichiarazione reattiva */
    $: double = contatore * 2; /* double cambia al variare del valore contatore */

    $: underline = cont % 2;
</script>

<section>
    <h1 class:underline>Pagina Counter!!!</h1>
    <!-- classe si attiva in base al valore della  -->

    <!-- blocco condizionale -->
    {#if contatore <= 70}
        <h2 class="rosso">Il valore del contatore e': {contatore}</h2>
    {:else}
        <h2 class="verde">Il valore del contatore e': {contatore}</h2>
    {/if}

    <h3>Double: {double}</h3>

    <Counter bind:count={contatore} />
    <!-- component binding [e' biridezionale]-->
    <!-- <componente bind:props={variabile_locale} -->

    <h3 class={cont < 0 ? "rosso" : "verde"}>Double Counter</h3>
    <!-- advance styling -->
    <DoubleCounter bind:count={cont} />

    <!-- ciclo iterativo -->
    <ul>
        {#each numberi as n, indice}
            <!-- per ogni elemento in numeri fa quel html -->
            <li>numeri[{indice}]: {n}</li>
        {/each}
    </ul>
</section>

<style>
    .rosso {
        color: red;
    }
    .verde {
        color: green;
    }
    .underline {
        text-decoration: underline;
    }
</style>