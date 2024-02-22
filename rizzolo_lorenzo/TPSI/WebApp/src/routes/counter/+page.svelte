<script>
	import Counter from "../../components/counter.svelte"

	let cont = 0
	let doppio=0

	let numeri = [1, 7, 2, 6, 9, 10]
	let sottolineato=true
</script>

<h2 class='{cont<5 ? "tred" : "tgreen"}' class:sottolineato>Valore: {cont}</h2>
	<h2 class='{doppio<5 ? "tred" : "tgreen"}' class:sottolineato>Valore doppio: {doppio}</h2>	


 
<Counter bind:counter={cont} bind:doppio={doppio}/>

<ul>
	{#each numeri as num, index}
		<li>numeri[{index}]: {num}</li>
	{/each}
</ul>


<style>
	.tred{
		color: red;
	}
	.tgreen{
		color: green;
	}
	.sottolineato{
		text-decoration: underline;
	}
</style>