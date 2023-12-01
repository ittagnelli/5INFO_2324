<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";
    import {onMount} from "svelte";
    
    let todos = []; //ToDoList
    let last_id = 0;
    

    const create_todo = async () => {
    
    let todo = {//ToDo Item
    id: ++last_id,
    task: '',
    done: false,
    priority: 3
    };
    console.log("CREATE:", todo);
    //inserisco il nuoto todo nel localStorage
    localStorage.setItem(`todo${todo.id}`, JSON.stringify(todo)) 
    //aggiorno la todo list
    todos = [...todos, todo]; 

    onMount(async () => {
        for(let i = 0; i<localStorage.length; i++){
            const key = localStorage.key(i);
            const todo=JSON.parse(localStorage.getItem(key));
            if(todo != null)
            todos.push(todo);
        }
        //faccio vedere a Svelte le modifiche a todos
        todos=[...todos];
    })
}

const change_todo_item = async (e) =>
    {
        switch(e.detail.type){
            case 'update':
                update_item(e.detail.id);
                break;
            case 'delete':
                delete_item(e.detail.id);
                break;
        }
    }

    const update_item = (id) => {
        console.log("Update:", id);

        //aggiorno il localstorage
        const todo = todos.filter(t => t.id==id)[0];
        localStorage.setItem(`todo${id}`, JSON.stringify(todo));
    }

    const delete_item =(id) =>
    {
        console.log("DELETE:", id);
        todos= todos.filter(t => t.id != id);
        //rimuovo  il todo dal localStorage 
        localStorage.removeItem(`todo${id}`)
    }

    </script>

    <h1 class="app_title">ToDos</h1>

    <div class="todo-list">
        <div class="header"><Icon name="tag"/></div>
        <div class="header"><Icon name="task_alt"/></div>
        <div class="header"><Icon name="list"/></div>
        <div class="header"><Icon name="schedule"/></div>
        <div class="header header-last"><Icon name="add_box" handler={create_todo}/></div>
        
                <!-- ToDo Items -->

                {#each todos as todo}
        <TodoItem todo={todo} on:change={change_todo_item}/>
    {/each}

         </div>
    <style>
       
       
       .todo-list{
            display: grid;
            grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
            border: 0px solid blue;
            width: 95%;
            margin: auto;
        }

        .header{
            border-bottom: 1px solid #E7ECEE;
            border-right: 1px solid #E7ECEE;
            text-align: center;
            padding-bottom: 20px;

        }
        .header-last{
            border-right: none;
        }
        
       
       </style>
