<script>
    import { gg_selected } from '../js/store';
    import { mm_selected } from '../js/store';
    import { aaaa_selected } from '../js/store';
    
    export let list = [""];
    export let selected = "";

    function update_value() {
        if (list.length == 31)
            $gg_selected = selected;
        else if (list.length == 12)
            $mm_selected = selected;
        else if (list.length == 124)
            $aaaa_selected = selected;
    }
</script>

<section>
    <label for="selected" id={selected} >{selected}</label>

    <select bind:value={selected} size="6" on:change={update_value}>
        {#each list as i}
            <option value={i}>{i}</option>
        {/each}
    </select>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 100%;
        row-gap: 10px;
    }
    
    label {
        border: 1px solid black;
        height: 25px;
        padding: 2%;
    }
</style>
