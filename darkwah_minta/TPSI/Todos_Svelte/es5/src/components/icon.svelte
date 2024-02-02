<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
</svelte:head>
<script>
    export let name;
</script>
<span class="material-icons-outlined icon">
    {name}
</span>

<style>
    div 
    {
        border: 2px solid green;
        width: 64px;
        height: 64px;
        margin: 5px;
    }
</style>