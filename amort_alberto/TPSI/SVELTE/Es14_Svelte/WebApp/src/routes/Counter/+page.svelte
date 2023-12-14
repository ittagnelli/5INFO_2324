
<script>
    import Counter from "./counter.svelte";
    import DoubleCounter from "./double_counter.svelte";

    function gestisci_evento(evento)
    {
        alert(`${evento.detail.tipo} -- ${evento.detail.valore}`);
    }


	let contatore = 0; // stato di un contatore    
    let numeri = [1, 7, 2, 6, 9, 10];
    let sottolineato;
    let doppiocont=0;
    let doppio;

    function incremente() {
        contatore++;
    }

    $: doppio = contatore * 2;
    $: {if(doppiocont%2==0)
    { sottolineato=true;
    }
    else
    {
        sottolineato=false;
    }}
</script>

<h1>Page Counter !!!</h1>




{#if contatore < 5}
<h2 class="rosso"> il valore del contatore vale: {contatore}</h2>
{:else}
<h2 class="verde">il valore del contatore vale : {contatore}</h2>
{/if}


<h2 class:sottolineato>
    il valore del contatore vale: {contatore}

</h2>

<h2>
    il suo doppio vale {doppio}
</h2>




<Counter bind:counter={contatore} on:contatore={gestisci_evento}/>

<h2 >il valore del contatore vale : {doppiocont}</h2>

<DoubleCounter bind:dp={doppiocont} on:doppiocont={gestisci_evento}/>


<ul>
    {#each numeri as numero, indice}
    <li> numeri[{indice}]:{numero}</li>
    {/each}
</ul>



<style>
    .rosso {color: red;}
    .verde {color: green;}
    .sottolineato {text-decoration: underline;  }
</style>