<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"/>
</svelte:head>

<script>
    export let nome
</script>

<div>
    <span class="material-symbols-outlined">
        {nome}
    </span>
</div>


<style>
    .icon{
        color: black;
        font-size: 32px;
    }
    .icon:hover{
        cursor: pointer;
    }   
</style>

