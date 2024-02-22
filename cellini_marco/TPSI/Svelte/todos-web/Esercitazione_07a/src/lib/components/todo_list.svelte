<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";

    let n = ["tag", "task_alt", "list", "schedule", "add_box"];

    let todos = [
        {
            id: 1,
            task: "Studiare TPSI",
            done: false,
            priority: 1
        },
        {
            id: 3,
            task: "Studiare RETI",
            done: true,
            priority: 2
        },
        {
            id: 2,
            task: "Studiare GPO",
            done: false,
            priority: 3
        }
    ] 
</script>

<h1>ToDos</h1>

<div class="todo-list">
    
    {#each n as i}
        <div class="header"><Icon name={i}/></div>
    {/each}

    <!-- item 1 -->
    <TodoItem todo={todos[0]} />

    <!-- item 2 -->
    <TodoItem todo={todos[1]} />

    <!-- item 3 -->
    <TodoItem todo={todos[2]} />

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