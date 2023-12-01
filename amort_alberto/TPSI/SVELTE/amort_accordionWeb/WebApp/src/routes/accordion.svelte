<svelte:head>    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
rel="stylesheet"/></svelte:head>


<script>
    export let open = false;
	import { slide } from 'svelte/transition';

    const handle_click = () => {open = !open;}

</script>

<div class="accordion">
	<div class="header">
		<div class="text">
			<slot name="head" ></slot>	

		</div>

		<button on:click={handle_click}>
			{#if open==true}
			<span class="material-icons-outlined">
				expand_less
				</span>
			{:else}
			<span class="material-icons-outlined">
				
				expand_more
				</span>
			{/if}
		</button>


</div>

{#if open}
	<div class="details" transition:slide>
		<slot name="details">
		</slot>
	</div>
	{/if}

</div>

<style>

	.accordion{
		margin: auto;
		width:80%;
		border-top-left-radius:3px ;
		border-top-right-radius:3px ;



	}
	
	
	.header {
		display:flex;
		width:100%;
        padding: 5px;
		border: 1px solid grey;


	}

    .header:hover{
        border: 5px solid grey;
        background-color: #cecece;

    }
	
	div.header .text {
		flex: 1;
		margin-right: 5px;
	}
	
	div.details {
		padding:1rem;
		border: 1px solid grey;
    }

	.head{
		align-self: stretch;
		padding: 5px;
	}


   
</style>
