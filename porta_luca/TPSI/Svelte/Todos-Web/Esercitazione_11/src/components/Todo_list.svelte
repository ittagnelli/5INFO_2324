<script>
    import Icon from "./Icon.svelte";
    import Priority from "./Priority.svelte";
    import TodoItem from "./Todo_item.svelte";

    let todos=[]; //TODOList
    let last_id = 0;
    const create_todo = async () => {
        let todo={
        id: ++last_id,
        task: '',
        done: false,
        priority: 3
        };
    console.log("CREATE:", todo);
    todos=[...todos, todo];
    }
</script>
    <div class="todo-list">
        <div><Icon name="task"/></div>
        <div><Icon name="task_alt"/></div>
        <div><Icon name="list"/></div>
        <div><Icon name="schedule"/></div>
        <div><Icon name="add_box" handler={create_todo}/></div>
        
        {#each todos as todo}
            <TodoItem todo={todo}/>
        {/each}
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
<!--todo_list.svelte
<script>
= let todos []; //TODOList
let last_id = 0;
= let todo { //ToDo Item
const create_todo = async () => {
id: ++last_id,
task:
done: false,
priority: 3
}; //aggiorno la todo list todos...todos, todo];
console.log("CREATE:", todo);
}
</script>
<h1>ToDos</h1>
<div class="todo-list">
<div class="header"><Icon name="add_box" handler={create_todo}/></div>
<!-- ToDo Items --
{#each todos as todo}
<TodoItem todo={todo} />
{/each}
</div>-->