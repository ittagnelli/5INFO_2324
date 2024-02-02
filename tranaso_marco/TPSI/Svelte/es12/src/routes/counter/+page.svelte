<script>
import Counter from "../../lib/components/counter.svelte";
import DoubleCounter from "../../lib/components/double_counter.svelte";
let counter =0;
let counter1=0;
</script>

<h1 >Pagina Counter!!</h1>
<h2>Il valore del contatore vale:{counter}</h2>
<Counter bind:counter={counter}/>
<DoubleCounter bind:counter1={counter1}/>
