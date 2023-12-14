<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<script>
    export let name;
    export let handler = () => {};
</script>

<span class="material-symbols-outlined icon" on:click={handler}>{name}</span>

<style>
    .icon{
        font-size: 32px;
    }

    .icon:hover{
        cursor: pointer;
    }
</style>