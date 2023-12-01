<script>
    import Cell from "./cell.svelte";
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";

    export let todo;


    const toggle_status = () => {
        todo.done = !todo.done;
    }
</script>

<Cell>
    {todo.id}
</Cell>

<Cell>
    {#if todo.done == false}
        <Icon name="circle" handler={toggle_status}/>
    {:else}
        <Icon name="task_alt"  handler={toggle_status}/>
    {/if}
    
</Cell>

<Cell>
    {todo.task}
</Cell>

<Cell>
    <Priority/>
</Cell>

<Cell>
    <Icon name="delete_forever"/>
</Cell>