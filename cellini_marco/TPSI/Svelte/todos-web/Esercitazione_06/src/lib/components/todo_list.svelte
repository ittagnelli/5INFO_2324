<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";

    let n = ["tag", "task_alt", "list", "schedule", "add_box"];
</script>

<h1>ToDos</h1>

<div class="todo-list">
    
    {#each n as i}
        <div class="header"><Icon name={i}/></div>
    {/each}

    <!-- item 1 -->
    <TodoItem />

    <!-- item 2 -->
    <TodoItem />

    <!-- item 3 -->
    <TodoItem />

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