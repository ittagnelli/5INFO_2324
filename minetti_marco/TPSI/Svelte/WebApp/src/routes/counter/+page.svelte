<script>
    import { createEventDispatcher } from "svelte";
    import Contatore from "../../lib/components/count_er.svelte";
    import Contatore_double from "../../lib/components/count_er_double.svelte";
    let contatore;
    let contatore_double;
    let numeri = [1, 2, 3, 4, 5];
    let sottolineato = true;
    let doppio;            
    
    function gestisci_evento(evento) {
        alert(`${evento.detail.tipo} -- ${evento.detail.valore}`);  
    }

    $: doppio = contatore * 2;
</script>

<h1>Pagina Counter!!!</h1>

<h2 class={contatore < 5 ? 'rosso' : 'verde'}>Il valore del contenitore vale: {contatore}</h2>

<h2>
    Il suo doppio vale: {doppio}
</h2>


<!--     
<h2 class:sottolineato>
    Il valore del contatore vale: {contatore}
</h2>

{#if contatore < 5} 

<h2 class="rosso">Il valore del contenitore vale: {contatore}</h2>

{:else}

<h2 class="verde">Il valore del contenitore vale: {contatore}</h2>

{/if} -->

<Contatore bind:counter={contatore} on:contatore={gestisci_evento}/>

<br><br>

<h2 class={contatore_double % 2 ? 'sottolineato' : ''}>Il valore del contenitore vale: {contatore_double}</h2>

<Contatore_double bind:counter={contatore_double}/>

<ul>
    {#each numeri as numero}

        <li>numeri[]: {numero}</li>

    {/each}
</ul>

<style>
    .rosso {
        color: red;
    }

    .verde {
        color: lightgreen;
    }

    .sottolineato {
        text-decoration: underline;
    }
</style>