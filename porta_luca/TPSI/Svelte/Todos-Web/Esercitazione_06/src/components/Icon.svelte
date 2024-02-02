<svelte:head>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
</svelte:head>

<script>
    export let name;
</script>

<main>
    <span class="material-icons-outlined icon">
    {name}
    </span>
</main>
<style>
    .icon {font-size: 32px;}
    .icon:hover {cursor: pointer;}
</style>