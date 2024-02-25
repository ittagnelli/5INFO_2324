<script>
export let item;
export let length = 0;
</script>
<select size=5 bind:value={item}>
    {#each Array(length).keys() as day, i}
        <option value={i}>{i}</option>
    {/each}
</select>