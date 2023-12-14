<script>
    import DoubleCounter from "../../lib/components/double_counter.svelte";
    import Counter from "../../lib/components/counter.svelte";
    let contatore = 0;
    let contatore1 = 0;
    let numeri = [1, 4, 8, 33, 56, 97];
    let sottolineato = true;
    let doppio;
    let doppi1;
    $: doppio = contatore * 2;
    $: doppio1 = contatore1 * 2;
    $: sottolineato = contatore1 % 2 == 0;

    function gestisci_evento(evento){
        alert(`${evento.detail.tipo} -- ${evento.detail.valore}`);
    }
    
</script>

<main>
    <h1>Pagina counter!!!</h1>
    <h2 class={contatore < 5 ? "rosso" : "verde"}>
        Il valore del contatore vale: {contatore}
    </h2>
    <h2>Il suo doppio vale: {doppio}</h2>
    
    <Counter bind:contatore />

    <br />
    <h2 class:sottolineato>
        Il valore del contatore1 vale: {contatore1}
    </h2>
    <h2>Il suo doppio vale: {doppio1}</h2>
    <DoubleCounter bind:contatore1 on:contatore1={gestisci_evento} />

    <ul>
        {#each numeri as numero, indice}
            <li>numeri[{indice}]:{numero}</li>
        {/each}
    </ul>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
    }
    h1 {
        text-align: center;
        font-size: xx-large;
    }
    main {
        width: 100%;
        height: 100%;
    }
    .rosso {
        color: red;
    }
    .verde {
        color: greenyellow;
    }
    .sottolineato {
        text-decoration: underline;
    }
</style>
