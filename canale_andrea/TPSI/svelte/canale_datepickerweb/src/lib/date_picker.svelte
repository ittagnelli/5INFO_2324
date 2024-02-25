<script>
    import ArrayLengthPicker from "$lib/picker_components/ArrayLengthPicker.svelte";

    export let day = "GG";
    export let month = "MM";
    export let year = "AAAA";

    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    function btn_click() {
        dispatch('newDate', {
            day: day,
            month: month,
            year: year
        });
    }

</script>

<ArrayLengthPicker bind:item={day}></ArrayLengthPicker>

<ArrayLengthPicker bind:item={month}></ArrayLengthPicker>

<ArrayLengthPicker bind:item={year}></ArrayLengthPicker>

<button on:click={btn_click}>
    SELECT
</button>