<script>
    export let name;
    export let handler=()=>{};
    export let color="green";
</script>


<svelte:head>
    <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet">

</svelte:head>
<span class="material-icons-outlined icon" style="--color:{color};"on:click={handler}>
    {name}
</span>

<style>
    div{
        border: 2px solid green;
        width: 64px;
        height: 64px;
        margin:5px;
    }
    .icon{
        color: var(--color);
        font-size: 32px;
    }
    .icon:hover{
        cursor: pointer;
    }
</style>