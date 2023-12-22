<svelte:head>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
</svelte:head>

<script>
    import Icona from "./Icona.svelte";
    import Cella from "./Cella.svelte";
    export let id;
    let n=0;
    let elementi=[];
    const apri=async()=>{
        n+=1;

        let elemento_= {done: false, task: 'Lorem Ipsum'};

        console.log("CREATE", elemento_);
        elementi=[...elementi, elemento_];
    }
</script>

<div class="contenitore">
    <h1>Header {id}</h1>
    <button on:click={apri}>
        {#if n%2==0}
            <Icona name="add_box"/>
        {:else}
            <Icona name="delete_forever"/>
        {/if}
    </button>
</div>
<Cella />

<style>
    .contenitore{
        border: 5px solid lime;
        width: 80%;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }
    button{border: none;background-color: white;}
</style>