<script>
    import Cell from "./cell.svelte";
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let todo;        // oggetto todo ricevuto in input

    const toggle_status = () => {
        todo.done = !todo.done;
    }

    const edit_task = () => {
        document.getElementById(todo.id).blur();
    }

    const item_change = (type) => {
        dispatch('change', {type: type, id: todo.id});
    }
</script>

<Cell>
    {todo.id}
</Cell>

<Cell>
    <Icon 
        name={!todo.done ? "circle" : "task_alt"} 
        handler={toggle_status} 
        color={!todo.done ? "green" : "red"} />
</Cell>

<Cell>
    <input
        type="text"
        class="todo-item-input-text"
        id="{todo.id}"
        placeholder="Inserisci il nuovo ToDo"
        bind:value={todo.task}
        on:change={edit_task} />
</Cell>

<Cell>
    <Priority />
</Cell>

<Cell>
    <Icon name="delete_forever" handler={() => item_change('delete')} color="red" />
</Cell>

<style>
    .todo-item-input-text {
        border: none;
        width: 90%;
        height: 30px;
        font-size: 20px;
        color: #525252;
    }

    .todo-item-input-text:focus {
        background-color: rgb(209, 229, 253);
        color: black;
        padding: 4px;
        padding-left: 10px;
    }
</style>