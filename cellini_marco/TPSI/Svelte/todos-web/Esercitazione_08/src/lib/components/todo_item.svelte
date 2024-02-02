<script>
    import Cell from "./cell.svelte";
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";

    export let todo;        // oggetto todo ricevuto in input
</script>

<Cell>
    {todo.id}
</Cell>

<Cell>
    <Icon name={!todo.done ? "circle" : "task_alt"} />
</Cell>

<Cell>{todo.task}</Cell>

<Cell>
    <Priority />
</Cell>

<Cell>
    <Icon name="delete_forever" />
</Cell>