<script>
    let months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre",
    ];
    let Month = "Gennaio";
    let selectedMese = "MM";

    function updateMonth() {
        selectedMese = months[Month - 1];
        store_mese.set(selectedMese);
    }
    import { store_mese } from "../js/store.js";
</script>

<div>
    <input class="month" value={selectedMese} readonly /><br />
    <select size="6" id="mese1" bind:value={Month} on:change={updateMonth}>
        {#each months as month, i}
            <option value={i + 1}>{month}</option>
        {/each}
    </select>
</div>

<style>
    .month {
        width: 100px;
        padding: 10px;
        text-align: center;
    }
    #mese1 {
        width: 120px;
    }

    div {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
