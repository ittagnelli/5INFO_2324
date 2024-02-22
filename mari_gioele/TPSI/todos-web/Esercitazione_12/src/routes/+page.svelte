<script>
    import TodoList from '../components/Todo_list.svelte';
</script>

<main>
    <h1>Todos</h1>
    <TodoList />
</main>

<style>
    main{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 1069px;
        margin: auto;
        border: 5px solid red;
    }
    h1{
        width: 100%;
    }
</style>