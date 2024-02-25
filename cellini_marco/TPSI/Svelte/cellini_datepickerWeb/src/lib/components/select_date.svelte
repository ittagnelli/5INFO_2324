<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function update_date() {
        dispatch('newDate', {
            tipo : "Update date"
        });
    }
</script>

<button on:click={update_date}>Select</button>

<style>
    button {
        height: 45px;
    }

    button:hover {
        cursor: pointer;
    }
</style>