<script>
    import Icon from "../components/icon.svelte"
    import Cell from "../components/cell.svelte"
    import Priority from "../components/priority.svelte"
    import {createEventDispatcher } from "svelte"

    export let todo
    const dispatch = createEventDispatcher()

    const toggle_status = () =>{
        todo.done = !todo.done
    }

    const edit_task = () => {
        document.getElementBYId(todo.id).blur()
    }

    const change_item = (type) => {
        dispatch("change", {
            "tipo":type,
            "id": todo.id
        })
    }
    
</script>


<Cell> {todo.id} </Cell>

<Cell> 
    {#if todo.done==false}
        <Icon nome='circle' handler={toggle_status} color='red' /> 
    {:else}
        <Icon nome='task_alt' handler={toggle_status} color='green' /> 
    {/if}
</Cell>

<Cell>
<input 
type='text'
class="todo-item-input-text"
id="{todo.id}"
placeholder="Inserisci una nuova task"
bind:value = {todo.task}
on:change = {edit_task}
>
</Cell>

<Cell> <Priority /> </Cell>

<Cell> <Icon nome='delete_forever' color='red' handler={() => change_item("delete")} /> </Cell>

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
