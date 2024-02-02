<script>
    import Cell from './cell.svelte';

    let n = [0, 1, 2, 3, 4];
</script>

{#each n as i}
    <Cell />
{/each}