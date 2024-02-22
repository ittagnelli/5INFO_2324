<script>
    import Cell from "./cell.svelte";
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch=createEventDispatcher();
    const item_change=(type)=>{
        dispatch("change", {type: type, id: todo.id});
    }

    export let todo; //oggetto todo ricevuto in input

    const toggle_status = () => {
        todo.done = !todo.done;
    }


    const edit_task = () => {
        document.getElementById(todo.id).blur();
    }
</script>

<Cell>
    {todo.id}
</Cell> 

<Cell>
   {#if todo.done == false}
   <Icon name="circle" color="red" handler={toggle_status} />
   {:else}
   <Icon name="task_alt" handler={toggle_status} />
   {/if}
</Cell>


<Cell>
    <input
    type="text"
    class="todo-item-input-text"
    id="{todo.id}"
    placeholder="Inserisci il nuovo ToDO"
    bind:value={todo.task}
    on:change={edit_task} />
</Cell>

    <Cell>
        <Priority />
     </Cell>

     <Cell last>
        <Icon name="delete_forever" color="red" handler={()=>item_change("delete")}/>
    </Cell>

<style>
    .todo-item-input-text{
        border: none;
        width: 90%;
        height: 30px;
        font-size: 20px;
        color: #525252;
    }
    .todo-item-input-text:focus{
        background-color: rgb(204, 229, 253);
        color: black;
        padding: 4px;
        padding-left: 10px;

    }
</style>


