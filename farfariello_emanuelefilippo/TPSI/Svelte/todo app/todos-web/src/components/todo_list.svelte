
<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";

    let todos = [];
    let last_id = 0;

    const create_todo = async () => {
        let todo = {
            id : ++last_id,
            task: '', 
            done: false,
            priority:3
        }

    console.log("CREATE:", todo);
    todos = [...todos, todo];
    };


</script>

<h1> ToDos</h1>
<div class="todo-list">
    <div class = "heder"> <Icon name = "tag" /></div>
    <div class = "heder"> <Icon name = "task_alt" /></div>
    <div class = "heder"> <Icon name = "list" /></div>
    <div class = "heder"> <Icon name = "schedule" /></div>
    <div class = "heder"> <Icon name = "add_box" handler = {create_todo} /></div>

    {#each todos as todo}
    <TodoItem todo= {todo   }/>

    {/each}
    
</div>

<style>
    .todo-list {
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 3px solid blue;
        width: 95%;
        height: 80%;
        
    }


</style>
