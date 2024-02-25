<script>
    export let name;
    export let handler = () => {};
    export let color ="green";
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
</svelte:head>


<span class="material-symbols-outlined icon" style="--color:{color};"
on:click={handler}>
    {name}
</span>

<style>
    .icon {
        color: var(--color);
        font-size: 32px;

    }
    .icon:hover {
        cursor: pointer;
    }
</style>
