<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";
    import { onMount } from "svelte";

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

        // aggiungiamo il todo al localStorage
        localStorage.setItem(`todo${todo.id}`, JSON.stringify(todo));

        todos = [...todos, todo];       // aggiorno la todo list
        console.log(todos);
    }

    const delete_item = (id) => {
        todos = todos.filter(t => t.id != id);
        console.log("DELETE ", id);
        //localStorage.removeItem(`todo${id}`);
    }

    const update_item = async(id) => {
        // aggiorniamo il localStorege
        const todo = todos.filter(t => t.id == id)[0];
        localStorage.setItem(`todo${todo.id}`, JSON.stringify(todo));
    }

    const change_todo_item = async(e) => {
        switch(e.detail.type) {
            case 'update':
                update_item(e.detail.id);
                break;
            case 'delete':
                delete_item(e.detail.id);
                break;
            default:
                console.log("we");
                break;
        }
    }

    onMount(async() => {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const todo = JSON.parse(localStorage.getItem(key));
            if (todo != null)
                todos.push(todo);
        }
        todos = [...todos];
    });
</script>

<h1 class="app-title">ToDos</h1>
<div class="todo-list">    
    {#each n as i}
        <div class="header"><Icon name={i}/></div>
    {/each}

    <div class="header header-last"><Icon name="add_box" handler={create_todo}/></div>

    {#each todos as todo}
        <TodoItem todo={todo} on:change={change_todo_item} />
    {/each}
</div>

<style>
    /* import font for text */
    @import url('https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@500&family=Sigmar&display=swap');

    .app-title {
        font-family: 'Edu TAS Beginner', cursive;
        font-family: 'Sigmar', sans-serif;
        margin-top: 0px;
        font-size: 60px;
        opacity: 0.3;
    }

    .todo-list {
        width: 95%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
    }

    .header {
        border-bottom: 1px solid #e7ecee;
        border-right: 1px solid #e7ecee;
        text-align: center;
        padding-bottom: 20px;
    }

    .header-last {
        border-right: none;
    }
</style>