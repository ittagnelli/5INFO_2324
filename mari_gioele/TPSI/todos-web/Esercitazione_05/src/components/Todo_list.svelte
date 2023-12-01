<script>
    import Icon from "./Icon.svelte";
    import TodoItem from "./Todo_item.svelte";
</script>
    <div class="todo-list">
        <div><Icon name="task"/></div>
        <div><Icon name="task_alt"/></div>
        <div><Icon name="list"/></div>
        <div><Icon name="schedule"/></div>
        <div><Icon name="add_box"/></div>

        <TodoItem />

        <TodoItem />

        <TodoItem />
    </div>
<style>
.todo-list {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
    border: 5px solid blue;
    width: 95%;
    height: 80%;
    }
</style>