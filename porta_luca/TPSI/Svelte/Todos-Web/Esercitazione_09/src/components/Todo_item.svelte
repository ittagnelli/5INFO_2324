<script>
    import Cell from "./Cell.svelte";
    import Icon from "./Icon.svelte";
    import Priority from "./Priority.svelte";
    export let todo;
    const toggle_status=()=>{todo.done=!todo.done;}
</script>
<Cell>
    {todo.id}
</Cell>
<Cell>
    {#if todo.done==false}
        <Icon name="circle" handler={toggle_status}/>
    {:else}
        <Icon name="task_alt"handler={toggle_status}/>
    {/if}
</Cell>
<Cell>
    task
</Cell>
<Cell>
    <Priority />
</Cell>
<Cell>
    <Icon name="delete_forever"/>
</Cell>