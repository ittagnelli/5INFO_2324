<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";

    let todos = [];
    let last_id = 0;

    const create_todo = async () => {
        let todo = {
            id: ++last_id,
            task:"",
            done: false,
            priority: 3
        };
        console.log("CREATE:", todo);
        todos = [...todos, todo];
    }

    const change_todo_item = async (e) => {
        delete_item(e.detail.id);
    }

    const delete_item = (id) => {
        console.log("DELETE:", id);
        todos =todos.filter(t => t.id != id);
    }

</script>

<h1 class="app_title">ToDos</h1>
<div class = "todo-list">
    <div class="header"><Icon name="tag"/></div>
    <div class="header"><Icon name="task_alt"/></div>
    <div class="header"><Icon name="list"/></div>
    <div class="header"><Icon name="schedule"/></div>
    <div class="header header_last"><Icon name="add_box" handler={create_todo}/></div>

    <!-- Todo items -->
    {#each todos as todo}
    <TodoItem todo={todo} on:change={change_todo_item}/>   
    {/each}
</div>

<style>
    
    @import url('https://fonts.googleapis.com/css2?family=Griffy&display=swap');
    
    .app_title {
        font-family: 'Griffy';
        margin-top: 0px;
        font-size: 70px;
        opacity: 0.7;   
        color: blue;  
    }

    .todo-list {
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        width: 95%;
        margin: auto;
    }

    .header {
        border-bottom: 1px solid #E7ECEE;
        border-right: 1px solid #E7ECEE;
        text-align: center;
        padding-bottom: 20px;
    }

    .header_last {
        border-right: none;
    }
</style>