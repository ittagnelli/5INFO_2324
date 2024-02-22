<script>
    export let nome
    export let cognome
    export let eta
    export let src
    export let width_image
    export let enable

    import { store_counter } from "../lib/js/store";
    import Counter from "./counter.svelte";
</script>

{#if enable}

    {#if nome=="" || cognome=="" || eta==""}

        <span class="tred">Dati non validi</span>

    {:else}

        <div class="whoami">
            <h1>Ciao io sono {nome} {cognome} ed ho {eta} anni</h1>
        
            <p>Sono uno studente di 5 informatica all'Agnelli di Torino</p>
            
            <img {src} alt='loriz' width="{width_image}">

            <div>Counter: {$store_counter}</div>
            
        </div>

    {/if}

{/if}

<style>
    .whoami{
        border: 5px solid green;
    }
    .tred{ color: red; }
</style>