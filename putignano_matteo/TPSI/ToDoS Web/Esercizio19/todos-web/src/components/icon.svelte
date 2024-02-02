<svelte:head>
    <link 
    rel="stylesheet" 
    href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"   
    />
</svelte:head>

<script>
    export let name;
    export let handler  = () => {};
    export let color = "green";
</script>

<span class="material-icons-outlined icon" style="--color:{color}" on:click={handler}>
    {name}
</span>

<style>
    .icon{
        color: var(--color);
        font-size: 32px;
    }

    .icon:hover{
        cursor: pointer;
    }
</style>