<script>
    import Icon from "./Icon.svelte";
</script>
    <div class="todo-list">
        <div><Icon /></div>
        <div><Icon /></div>
        <div><Icon /></div>
        <div><Icon /></div>
        <div><Icon /></div>

        <div>CELLA 1</div>
        <div>CELLA 2</div>
        <div>CELLA 3</div>
        <div>CELLA 4</div>
        <div>CELLA 5</div>

        <div>CELLA 1</div>
        <div>CELLA 2</div>
        <div>CELLA 3</div>
        <div>CELLA 4</div>
        <div>CELLA 5</div>

        <div>CELLA 1</div>
        <div>CELLA 2</div>
        <div>CELLA 3</div>
        <div>CELLA 4</div>
        <div>CELLA 5</div>
    </div>
<style>
.todo-list {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
    border: 5px solid blue;
    width: 95%;
    height: 80%;
    }
</style>