<script>
    import Cell from './cell.svelte';
    import Icon from './icon.svelte';
    import Priority from './priority.svelte';

    export let todo;

    const toggle_status = () => {
        todo.done =! todo.done;
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
    <Icon name="circle" handler={toggle_status}/>
{:else}
    <Icon name="task_alt" handler={toggle_status} />
{/if}
</Cell>
<Cell>
    <input type="text" class="todo-item-input-text" placeholder="Inserisci il nuovo ToDo" bind:value={todo.task} on:change={edit_task} >
</Cell>
<Cell>
    <Priority/>
</Cell>

<Cell>
    <Icon name="delete_forever" />
</Cell>


<style>
    .todo-item-input-text{
        border: none;
        width: 90%;
        height: 30px;
        font-size: 20px;
        color: #525252;
    }

    .todo-item-input-text{
        background-color: rgb(204, 229, 253);
        color: black;
        padding: 4px;
        padding-left: 10px;
    }
</style>