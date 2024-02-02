<script>
    import Titolo1 from "../lib/components/titolo_sopra.svelte";
    import Titolo2 from "../lib/components/titolo_sotto.svelte";
    import Paragrafo1 from "../lib/components/paragrafo1.svelte";
    import Paragrafo2 from "../lib/components/paragrafo2.svelte";

    let num = 2;
    
    const change_prio = () => {
        num = (num + 1) % 2 + 1;
        
    }
</script>


<br/><br/><br/>
<div id="tutto">
    
    <Titolo1 />
    {#if num == 1}
        <Paragrafo1/>
    {/if}
    <Titolo2 on:click={change_prio}/>
    {#if num == 2}
        <Paragrafo2/>
    {/if}
    
    
</div>

<style>
   
    #tutto
    {
        width: 45rem;
        height: 27rem;

        display: flex;
        flex-direction: column;

        
        border-radius: 1rem 1rem 0rem 0rem;
        margin: auto;

    }
</style>