<svelte:head>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
</svelte:head>

<script>
    export let name;
    export let handler = () => {};
    export let colore="lime";
</script>

<main>
    <span class="material-icons-outlined icon" style="--colore:{colore}" on:click={handler}>
    {name}
    </span>
</main>
<style>
    .icon {
        color: var(--colore);
        font-size: 32px;
    }
    .icon:hover {cursor: pointer;}
</style>