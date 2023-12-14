<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";

    let todos = [];
    let last_id = 0;

    const create_todo = async () => {
        let todo = {
            id: ++last_id,
            task: '',
            done: false,
            priority: 3
        };
        console.log("Create: ", todo);
        todos = [...todos, todo];
    }

    const change_todo_item = async (e) => {
        delete_item(e.detail.id);
    }

    const delete_item = (id) => {
        console.log("DELETE: ", id);
        todos = todos.filter(t => t.id != id);
    }
</script>

<h1>ToDos</h1>

<div class="todo-list">
    <div class="header"><Icon name="tag"/></div>
    <div class="header"><Icon name="task_alt"/></div>
    <div class="header"><Icon name="list"/></div>
    <div class="header"><Icon name="schedule"/></div>
    <div class="header"><Icon name="add_box" handler={create_todo}/></div>

    {#each todos as todo}
        <TodoItem todo={todo} on:change={change_todo_item}/>
    {/each}
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