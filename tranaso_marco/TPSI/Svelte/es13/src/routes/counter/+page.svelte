<script>
import Counter from "../../lib/components/counter.svelte";
import DoubleCounter from "../../lib/components/double_counter.svelte";
let counter =0;
let counter1=0;
let numeri=[1,4,62,4,2,69];
let sottolineato=true;
let doppio;

$: doppio=counter*2;
$: doppio1=counter1*2;

function gestisci_evento(evento){
    alert(`${evento.detail.tipo} -- ${evento.detail.valore}`);
}
</script>

<h1 >Pagina Counter!!</h1>


<h2 class={counter <5 ? "rosso" : "verde"}>Il valore del contatore vale:{counter}</h2>

    
<h2>Il doppio vale {doppio}</h2>
<Counter bind:counter={counter}/>


<h2 class:sottolineato>Il valore del contatore vale:{counter1}</h2>
<h2>Il doppio vale {doppio1}</h2>
<DoubleCounter bind:counter1={counter1} on:counter1={gestisci_evento}/>

<ul>
    {#each numeri as numero,indice}
    <li>numeri[{indice}]:{numero}</li>
    {/each}
</ul>
<style>
    .rosso
{
    color: red;
}
.verde{
    color: green;
}
.sottolineato{
    text-decoration: underline;
}
</style>
