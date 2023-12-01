<script>
	import Accordion from "./accordion.svelte";
	
	

</script>


<Accordion>

	<span slot="head">My Header 1</span>
	
	<div slot="details">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illo ab necessitatibus sint explicabo ... </p>

			<p>Check out this guide to learn how to <b class="violet">get started</b> and start developing websites even faster with components on top of Tailwind CSS </p>
		
	</div>
</Accordion>

<Accordion>

	<span slot="head">My Header 2</span>
	<div slot="details">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illo ab necessitatibus sint explicabo ... </p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illo ab necessitatibus sint explicabo ... </p>

			<p>Learn more about these technologies: </p>
			<ul class="violet">
				<li>Lorem ipsum </li>
				<li>Tailwind UI</li>
			</ul>
		
	</div>
</Accordion>





<style>
	.violet{
		color: violet;
	}
	


    
</style>
