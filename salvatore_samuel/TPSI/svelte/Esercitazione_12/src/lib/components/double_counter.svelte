<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/CSS2?family=Bungee+Spice&display=swap">
</svelte:head>

<script>
	export let counter = 0;

	function counter_incr() {
		counter += 2;
	}

	function counter_decr() {
		counter -= 3;
	}
</script>

<main>
	<div class="container">
		<div class="pulsante">
			<button on:click={counter_decr}>
				<span class="material-symbols-outlined icon">remove</span>
			</button>
		</div>
	
		<div class="number">
			{counter}
		</div>
	
		<div class="pulsante">
			<button on:click={counter_incr}>
				<span class="material-symbols-outlined icon">add</span>
			</button>
		</div>
	</div>
</main>

<style>
	.container {
		border: 4px solid #D34c2F;
		display: flex;
		justify-content: space-between;
		border-radius: 30px;
		width: 300px;
		padding: 10px;
	}

	.pulsante {
		display: flex;
		align-items: center;
	}

	button {
		background: none;
		border: none;
	}

	.icon {
		font-size: 2.5rem;
		color: #F09C00;
		font-weight: bolder;
	}

	.icon:hover {
		color: #D34c2F;
		cursor: pointer;
	}

	.icon:active {
		text-shadow: 1px 1px 10px #D34c2F;
	}

	.number {
		font-size: 4rem;
		text-shadow: 3px 3px #D34c2F;
		font-family: 'Bungee Spice', cursive;
		color: #ff9d00;
	}
</style>