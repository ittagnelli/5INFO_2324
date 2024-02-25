<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";
    import { onMount } from "svelte";
    const change_todo_item=async(e)=>{
        switch(e.detail.type){
            case 'update':
                update_item(e.detail.id);
                break;
                case 'delete':
                    delete_item(e.detail.id);
                    break;
        }
    }
    const update_item=(id)=>{
        console.log("UPDATE:" ,id);
        const todo=todos.filter(t=>t.id==id)[0];
        localStorage.setItem(`todo${id}`, JSON.stringify(todo));
    }
    let todos=[];
    let last_id=0;

    onMount(async()=>{
        for(let i=0;i<localStorage.setItem.length;i++)
        {
            const key=localStorage.key(i);
            const keyn=key.substring(4);
            if (keyn>=last_id)
            last_id=keyn;
            const todo=JSON.parse(localStorage.getItem(key));
            if (todo!=null)
            {
                todos.push(todo);
            }
        }
            todos=[...todos];
        });
    const create_todo=async()=>{
        let todo={
            id:++last_id,
            task:'',
            done:false,
            priority:3  
        };
        console.log("CREATE;", todo);
        localStorage.setItem(`todo${todo.id}`, JSON.stringify(todo));
        todos=[...todos,todo];
    }

    const delete_item=(id)=>{
        console.log("DELETED:", id);
        todos=todos.filter(t=>t.id!=id);
        localStorage.removeItem(`todo${id}`);
    }
</script>

<h1 class="app-title">TODOS</h1>
<div class="todo-list">
    <div class="header"><Icon name="tag" /></div>
    <div class="header"><Icon name="task_alt" /></div>
    <div class="header"><Icon name="list" /></div>
    <div class="header"><Icon name="schedule" /></div>
    <div class="header header-last"><Icon name="add_box" handler={create_todo} /></div>

    {#each todos as todo}
    <TodoItem todo={todo} on:change={change_todo_item}/>
    {/each}

</div>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&display=swap');

    .todo-list {
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 3px solid blue;
        width: 95%;
        margin: auto;
    }
    .app-title{
        font-family: 'Oswald', sans-serif;
    }
    .header{
        border-bottom: 1px solid #E7ECEE;
        border-right:  1px solid #E7ECEE;
        text-align: center;
        padding-bottom: 20px;
    }
    .header-last{
        border-right: none;
    }
</style>
