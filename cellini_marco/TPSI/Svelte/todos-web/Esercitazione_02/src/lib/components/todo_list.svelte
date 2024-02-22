<script>
    let n = [1, 2, 3, 4, 5];
</script>

<h1>ToDos</h1>

<div class="todo-list">
    
    {#each n as i}
        <div class="header">H{i}</div>
    {/each}

    <!-- item 1 -->
    {#each n as i}
        <div>CELLA {i}</div>
    {/each}

    <!-- item 2 -->
    {#each n as i}
        <div>CELLA {i}</div>
    {/each}

    <!-- item 3 -->
    {#each n as i}
        <div>CELLA {i}</div>
    {/each}

</div>

<style>
    .todo-list {
        border: 3px solid blue;
        width: 95%;
        height: 80%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
    }
</style>