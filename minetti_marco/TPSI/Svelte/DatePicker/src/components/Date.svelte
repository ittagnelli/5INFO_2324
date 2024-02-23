<script>
    // import {val1} from "./Text.svelte"
    // import {val2} from "./Text.svelte"
    // import {val3} from "./Text.svelte"

    export let G = "GG";
    export let M = "MM";
    export let A = "AAAA";

    export let val1, val2, val3;

    const bucton = () => {
        G = val1;
        M = val2;
        A = val3;
    }


    export let giorni = [];
    export let mesi = [];
    export let anni = [];

    for (let i = 1; i <= 31; i++) {
        giorni.push(i);
    }

    for (let i = 1; i <= 12; i++) {
        mesi.push(i);
    }

    for (let i = 1960; i <= 2024; i++) {
        anni.push(i);
    }
    

</script>


<div>
    <input class="day" type="text" placeholder="{G}" readonly>
    <input class="month" type="text" placeholder="{M}" readonly>
    <input class="year" type="text" placeholder="{A}" readonly>
    <span class="button" on:click={bucton}>Select</span>


    <select bind:value = {val1} class="day" name="days" size="6">
        {#each giorni as j}
        <option value={j}>{j}</option>
        {/each}
    </select>


    <select bind:value = {val2} class="month" name="month" size="6">
        {#each mesi as j}
        <option value={j}>{j}</option>
        {/each}
    </select>


    <select bind:value = {val3} class="year" name="years" size="6">
        {#each anni as j}
        <option value={j}>{j}</option>
        {/each}
    </select>


</div>

<style>

    div{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 50px 100px;
        width: 30%;
        height: 10vh;
        margin: 0 auto;
    }

    input{
        text-align: center;
        box-shadow: inset 1px 1px gray;
        border: 1px solid black;
        height: 20px;
        margin-right: 10px;
    }

    .day{
        width: 100px;
    }

    .month{
        width: 100px;
    }

    .year{
        width: 180px;
    }


    .button {
        text-align: center;
        background-color: lightgray;
        display: inline-block;
        box-shadow: 1px 2px gray;
        border: 1px solid black;
        width: 100px;
        height: 20px;
    }

</style>

