<script>
	import Icon from './icon.svelte';
    import Accordion from "./accordion.svelte";

    export let headers
    export let texts
</script>


<div class='container'>

    {#each headers.keys() as k}

        <Accordion id={k} title={headers[k]} text={texts[k]}/>
    
    {/each}

</div>


<style>
    .container{
        /* border: 1px solid lightgray; */
        width: 500px;
        margin: auto;
        /* border-top-right-radius: 10px;
        border-top-left-radius: 10px; */
    }
    :global(.container .header:first-child){
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    :global(.container .header:last-child){
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }
</style>