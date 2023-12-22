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
        width: 60%;
        border: 0px solid red;
    }
</style>