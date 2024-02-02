<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";

    let n = ["tag", "task_alt", "list", "schedule"];

    let todos = [];
    let last_id = 0;

    const create_todo = async() => {
        let todo = {
            id: ++last_id,
            task: '',
            done: false,
            priority: 3
        };
        console.log("CREATE ", todo);

        todos = [...todos, todo];       // aggiorno la todo list
    }
</script>

<h1>ToDos</h1>

<div class="todo-list">    
    {#each n as i}
        <div class="header"><Icon name={i}/></div>
    {/each}

    <div class="header"><Icon name="add_box" handler={create_todo}/></div>

    {#each todos as todo}
        <TodoItem todo={todo} />
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