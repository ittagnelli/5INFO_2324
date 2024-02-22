<script>
    import Cell from "./cell.svelte";
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let todo;        // oggetto todo ricevuto in input
    //let old_priority = todo.priority;

    const toggle_status = () => {
        todo.done = !todo.done;
       // item_change('update');
    }

    const edit_task = () => {
        document.getElementById(todo.id).blur();
     //   item_change('update');
    }

    const item_change = (type) => {
        console.log(type);
        dispatch('change', {type: type, id: todo.id});
    }

    /* $: {
        if (todo.priority != old_priority) {
            old_priority = todo.priority;
            item_change('update');
        }
    } */
</script>

<Cell>
    {todo.id}
</Cell>

<Cell>
    <Icon 
        name={!todo.done ? "circle" : "task_alt"} 
        handler={toggle_status} 
        color={todo.done ? "green" : "red"} />
</Cell>

<Cell>
    <input
        type="text"
        class="todo-item-input-text {todo.done ? 'text-done' : ''}"
        id="{todo.id}"
        placeholder="Inserisci il nuovo ToDo"
        disabled={todo.done}
        bind:value={todo.task}
        on:change={edit_task} />
</Cell>

<Cell>
    <Priority bind:prio={todo.priority} disabled={todo.done}/>
</Cell>

<Cell last>
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

    .text-done {
        text-decoration: line-through;
        opacity: 0.3;
    }
</style>