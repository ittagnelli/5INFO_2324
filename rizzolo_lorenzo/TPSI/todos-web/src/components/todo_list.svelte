<script>
	import Cell from './cell.svelte';
    import Icon from "../components/icon.svelte"
    import TodoItem from "../components/todo_item.svelte"

    let todos =[]

    let last_id = 0

    let todo = {
        id: last_id,
        task: "",
        done: false,
        priority: 3
    }

    const create_task = async () => {
        todo = {
            id: ++last_id,
            task: "",
            done: false,
            priority:3
        }
        console.log("create", todo)
        todos = [...todos, todo]
    }

    const change_todo_item = async (e) => {
        delete_item(e.detail.id)
    }

    const delete_item = (id) => {
        console.log("delete", id)
        todos = todos.filter(to => to.id!=id )
    }

</script>

<h1>ToDos</h1>

<div class="todo-list">
   
    <div class="header"><Icon nome='tag' /></div>
    <div class="header"><Icon nome='task_alt' /></div>
    <div class="header"><Icon nome='list' /></div>
    <div class="header"><Icon nome='schedule' /></div>
    <div class="header"><Icon nome='add_box' handler={create_task} /></div>

    {#each todos as t}
        <TodoItem todo={t} on:change={change_todo_item}  />
    {/each}

</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');  
    .todo-list{
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 3px solid blue;
        width: 95%;
        height: 80%;
        margin: auto;
    }
</style>