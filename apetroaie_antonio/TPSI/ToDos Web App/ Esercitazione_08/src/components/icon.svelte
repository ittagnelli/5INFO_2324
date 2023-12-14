<svelte:head>

<link href="https://fonts.googleapis.com/icon?family=Material.Icons+Oullined"
rel="stylesheet"
/>

</svelte:head>

<script>
    export let name;
</script>

<span class="material-icons-outlined icon">{name}</span>


<div>
    ICON
</div>

<style>
    div {
        border: 2px solid green;
        width: 64px;
        height: 64px;
        margin: 5px;
    }

    .icon:hover {

        cursor: pointer;

    }
</style>