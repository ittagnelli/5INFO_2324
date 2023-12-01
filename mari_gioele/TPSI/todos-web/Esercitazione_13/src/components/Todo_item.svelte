<script>
    import Cell from "./Cell.svelte";
    import Icon from "./Icon.svelte";
    import Priority from "./Priority.svelte";
    import { createEventDispatcher } from "svelte";
    export let todo;
    const toggle_status=()=>{todo.done = !todo.done;}
    const edit=()=>{document.getElementById(todo.id).blur();}
    const dispatch=createEventDispatcher();
    const item_change = (type) => {
    dispatch ('change', { type: type, id: todo.id}); }
</script>
<Cell>
        {todo.id}
    </Cell>
    <Cell>
    {#if todo.done==false}
        <Icon name="circle" handler={toggle_status} colore="red"/>
    {:else}
        <Icon name="task_alt" handler={toggle_status}/>
    {/if}
</Cell>
<Cell>
    <input type="text" class="todo" id="{todo.id}" placeholder="Inserire nuovo ToDo" bind:value={todo.task} on:change={edit}>
</Cell>
<Cell>
    <Priority />
</Cell>
<Cell>
    <Icon name="delete_forever" handler={()=> item_change('delete')} colore="red"/>
</Cell>

<style>
    .todo{
        border: none;
        width: 90%;
        height: 30px;
        font-size: 20px;
        color: #525252;
    }
    .todo:focus{
        background-color: rgb(204, 229, 253);
        color: black;
        padding: 4px;
        padding-left: 10px;
    }
</style>