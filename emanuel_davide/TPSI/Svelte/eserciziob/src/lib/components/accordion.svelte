<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    //input
    export let item;

    function clickOnButton() {
        //emetto l output itemClick
        dispatch('itemClick', {id: item.id})
    }
</script>

<div class="title">
    <h1>{item.title}</h1>  
    <button on:click={clickOnButton}>{item.open ? 'close' : 'open'}</button>
</div>

{#if item.open}
<div class="content">
    <p>{item.content}</p>
</div>
{/if}


<style>
.title{
    border: solid 1px black;
    padding: 5px;
    text-align: center;
    position: relative;
}

button {
    position: absolute;
    right: 10px;
    top: 10px;
}
.content{
    border: solid 1px green;
}
</style>

