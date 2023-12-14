<script>
    import Cell from "./cell.svelte";
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";
    import { createEventDispatcher } from "svelte";

    export let todo;
    const dispatch = createEventDispatcher();

    const toggle_status = () => {
        todo.done =! todo.done;
    }

    const edit_task = () => {
        document.getElementById(todo.id).blur();
    }

    const item_change = (type) => {
        dispatch("change", { type: type, id: todo.id });
    }
</script>

<Cell> {todo.id} </Cell>
<Cell> 
    {#if todo.done == false}
        <Icon name="circle" handler={toggle_status} color="red"/>
    {:else}
        <Icon name="task_alt" handler={toggle_status}/>
    {/if}
</Cell>
<Cell> <input type="text" class="todo-item-input-text" id="{todo.id}" placeholder="Inserisci in nuovo ToDo" bind:value={todo.task} on:change={edit_task}></Cell>
<Cell> <Priority/> </Cell>
<Cell> <Icon name="delete_forever" handler={() => item_change('delete')} color="red"/> </Cell>

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