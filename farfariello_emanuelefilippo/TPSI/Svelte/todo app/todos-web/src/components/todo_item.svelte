<script>
    import { createEventDispatcher } from "svelte";
    import Cell from "./cell.svelte";
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";

    export let todo;
    let old_priority = todo.Priority;
    const dispatch = createEventDispatcher();

    const item_change = (type) => {
        dispatch ( 'change' , {type : type, id: todo.id});
    }


    const change_todo_item = async (e) => {
        delete_item (e.detail.id);
    }

    const delete_item = (id) => {
        console.log ("DELETE : ", id);
    }

    const toggle_status = () => {
        todo.done = !todo.done;
        item_change('update');
    }

    const edit_task = () => { 
    document.getElementById(todo.id).blur();
    item_change('update');
    }

    $: {
        if(todo.Priority != old_priority){
            old_priority = todo.Priority;
            item_change('update');
        }
    }

</script>



<Cell>
    {todo.id}
</Cell>

<Cell>
    {#if todo.done == false}
    <Icon name= "circle" handler ={toggle_status} color = "red"/>

    {:else}

    <Icon name ="task_alt" handler = {toggle_status} />
    {/if}
</Cell>
<Cell> 
    <input type= "text" 
    class="todo-item-input-text {todo.done == true ? 'text-done' : ''}"
    id="{todo.id}" 
    placeholder="inserisci il nuovo ToDo" 
    bind:value={todo.task} 
    on:change={edit_task} />
</Cell>
<Cell>
    <Priority  bind:prio= {todo.Priority}  disabled = {todo.done}/>
</Cell>
<Cell>
    <Icon name= "delete_forever"  color = "red" handler = {()=> item_change ('delete')}/> 
</Cell>





 <style> 
.todo-item-input-text{ 
    border:none; 
    width: 90%; 
    height: 30px; 
    font-size: 20px; 
    color: #525252; 
    } 

    .todo-item-input-text:focus{ 
        background-color: rbg(204, 229, 253); 
        color:black; 
        padding: 4px; 
        padding-left: 10px; 
    } 

    .text-done{
        text-decoration: line-through;
        opacity: 0.3;
    }
</style> 