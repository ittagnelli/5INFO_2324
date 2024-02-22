<script>
    import Cell from "./Cell.svelte";
    import Icon from "./Icon.svelte";
    import Priority from "./Priority.svelte";
</script>
<Cell>
    id
</Cell>
<Cell>
    <Icon name="circle"/>
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