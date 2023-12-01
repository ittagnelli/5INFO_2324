<svelte:head>
    <link 
    href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
    rel="stylesheet"
    />
</svelte:head>

<script>
    export let name;
    export let handler = () => {}; //handler di default
    export let color="green";
</script>

<span class="material-icons-outlined icon" on:click={handler} style="--color:{color};">
    {name} 
</span>



<style>

    .icon{
        font-size: 32px;
        color: var(--color);
    }

    .icon:hover{
        cursor: pointer;
    }

    div{
        border: 2px solid green;
        width: 64px;
        height: 64px;
        margin: 5px;
    }
</style>