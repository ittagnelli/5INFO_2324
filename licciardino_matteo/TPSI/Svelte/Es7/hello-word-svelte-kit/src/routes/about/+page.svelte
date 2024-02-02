<script>
	import Banner from '../../lib/components/banner.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About Me!</h1>
	<Banner/>

	<p>
		Ciao sono <a href="https://licciardino-matteo.github.io/portfolio-Matteo-Licciardino/Index.html">Matteo Licciardino</a> sono uno studente dell'agnelli,<br>
		il mio sito di educazione civica si trova qui 
	</p>

	<pre>https://licciardino-matteo.github.io/portfolio-Matteo-Licciardino/Index.html</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>
