<script>
	import Banner from "../../lib/images/components/banner.svelte";

</script>


<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About Me</h1>
	<Banner/>
	
 	<p>  ciao io sono <span class = "rosso"> emanuele </span> e sono uno studente dell'agnelli </p> 

	<p> il mio link: </p>
	<a href="https://www.google.com/search?q=juventus&oq=juventus&aqs=chrome.0.0i271j46i67i131i433i650j0i67i131i433i650j0i131i433i512l2j0i67i650j0i131i433i512j0i433i512j0i131i433i512j0i67i650.1489j1j7&sourceid=chrome&ie=UTF-8"  > juve </a>
		

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>


	
</div>
<style>
	.rosso{
		color:red;
	}
</style>