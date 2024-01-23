<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    //input
    let lista = ["Piemonte", "Lombardia"];
    export let item;


    function clickOnButton() {
        //emetto l output itemClick
        dispatch('itemClick', {id: item.id})
    }

    function addRegion() {
        dispatch('regionClick', {id: "Piemonte"})
    }

    function addPiedmont() {
        lista.append("Piemonte");
    }

</script>

<div class="title">
    <h1>{item.title}</h1>  
    <button class="fixedButton" on:click={clickOnButton}>{item.open ? 'close' : 'open'}</button>
</div>

{#if item.open}
<div class="content">
    <ol>
        <li><button on:click={addPiedmont}>piemonte</button></li>
        <li><button on:click={clickOnButton}>lombardia</button></li>
        <li><button on:click={clickOnButton}>lazio</button></li>
        <li><button on:click={clickOnButton}>liguria</button></li>
        <li><button on:click={clickOnButton}>puglia</button></li>
    </ol>
</div>
{/if}

<div>
    <p>Lista da vedere</p>
    <ul>
    {#each lista as elemento, indice}
        <li>
            Questa è la regione {elemento} 
        </li>
    {/each}    
    </ul>
</div>


<style>
.title{
    border: solid 5px red;
    padding: 5px;
    text-align: center;
    position: relative;
    border-radius: 30px;
    background-color: red;
    color: white;

}

.fixedButton {
    position: absolute;
    right: 10px;
    top: 10px;
}

.content{
    border: solid 1px green;
}
</style>

