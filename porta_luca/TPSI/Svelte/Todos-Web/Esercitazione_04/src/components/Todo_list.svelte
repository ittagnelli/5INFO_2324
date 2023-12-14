<script>
    import TodoItem from "./Todo_item.svelte";
    import Icon from "./Icon.svelte";
</script>
    <div class="todo-list">
        <div><Icon /></div>
        <div><Icon /></div>
        <div><Icon /></div>
        <div><Icon /></div>
        <div><Icon /></div>

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