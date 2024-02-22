<svelte:head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
      rel="stylesheet">
</svelte:head>

<script>
    export let nome
    export let color = "green"

    export let handler = () => {}
</script>

<div>
    <span class="material-icons-outlined icon" style='--color:{color};' on:click={handler}>
        {nome}
    </span>
</div>


<style>
    .icon{
        color: var(--color);
        font-size: 32px;
    }
    .icon:hover{
        cursor: pointer;
    }   
</style>

