<script>
    import TodoList from '../components/Todo_list.svelte';
</script>

<main>
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
</style>