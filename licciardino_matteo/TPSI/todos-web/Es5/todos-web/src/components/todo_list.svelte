<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";
</script>

<h1>ToDos</h1>

<div class="todo-list">
    <div class="header"><Icon name="tag"/></div>
    <div class="header"><Icon name="task_alt"/></div>
    <div class="header"><Icon name="list"/></div>
    <div class="header"><Icon name="schedule"/></div>
    <div class="header"><Icon name="add_box"/></div>

    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
</div>

<style>
    .todo-list{
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 3px solid blue;
        width: 95%;
        height: 80%;
        margin: auto;
    }
</style>