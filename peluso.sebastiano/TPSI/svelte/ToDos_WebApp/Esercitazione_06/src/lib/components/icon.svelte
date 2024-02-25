<script>
    export let name;
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
</svelte:head>


<span class="material-icons-outlined icon">
    {name}
</span>

<style>


    .icon{
        
        font-size: 32px;
        
    }

    .icon:hover{
        cursor: pointer;
    }

</style>