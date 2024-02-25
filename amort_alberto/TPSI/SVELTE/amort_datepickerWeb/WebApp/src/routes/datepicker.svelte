<script>
	import Titolo from "./titolo.svelte";
	import Giorno from "./giorni.svelte";
	import Mese from "./mese.svelte";
	import Anno from "./anni.svelte";
	import {store_anno} from "./store.js";
	import {store_giorno} from "./store.js";
	import {store_mese} from "./store.js";
	let g="GG";
	let m="MM";
	let a="AAAA";

	function metti_data ()
	{
		g=$store_giorno;
		a=$store_anno;
		m=$store_mese;
	}
	
	

</script>



<h1>L'utente ha selezionato {g} - {m} - {a}</h1>


<div class="date-grid">


<div class="header"><Titolo name={$store_giorno}/></div>
<div class="header"><Titolo name={$store_mese}/></div>
<div class="header"><Titolo name={$store_anno}/></div>
<div ><button  class="button" on:click={metti_data}>Select</button></div>

<Giorno />
<Mese />
<Anno />

</div>


<style>
	.date-grid
	{
		display: grid;
		grid-template-columns: 1fr 1fr 3fr 1.5fr;
		grid-column-gap: 10px;
		grid-row-gap: 25px;
		width: 38%;
		height: 80%;
		margin: auto;
		
	}


	.button{
		text-align: center;
		align-self: stretch;
		width: 100%;
		padding: 3px;


	}

	.header{
		border: 1px inset #E7ECEE;
		text-align: center;
		padding: 3px;



	}

	h1{
		text-align: center;
		margin-bottom: 50px;
	}
	

</style>

