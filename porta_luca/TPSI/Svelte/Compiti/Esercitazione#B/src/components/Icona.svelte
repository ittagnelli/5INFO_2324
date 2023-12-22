<script>
    export let name;
    export let elemento_
    export let handler=()=>{};
</script>

<main>
    <span class="material-icons-outlined icona" on:click={handler}>{name}</span>
</main>

<style>
    .icona{font-size: 32px; }
    .icona:hover{cursor: pointer;}
</style>