<script>
    import Cell from "./Cell.svelte";
    import Icon from "./Icon.svelte";
    import Priority from "./Priority.svelte";
    export let todo;
</script>
<Cell>
    {todo.id}
</Cell>
<Cell>
    {#if todo.done==false}
        <Icon name="circle"/>
    {:else}
        <Icon name="task_alt"/>
    {/if}
</Cell>
<Cell>
    {todo.task}
</Cell>
<Cell>
    <Priority />
</Cell>
<Cell>
    <Icon name="delete_forever"/>
</Cell>