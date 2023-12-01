<script>
    import { counter_index } from "../../lib/store";

    function add() {
        $counter_index++;
    }

    function remove() {
        $counter_index--;
    }
</script>
<div class="counter">
    <button on:click={remove}>-</button>
    <p>{$counter_index}</p>
    <button on:click={add}>+</button>
</div>

<style>
    .counter {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>