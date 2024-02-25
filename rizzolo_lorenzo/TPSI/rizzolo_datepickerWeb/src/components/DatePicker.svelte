

<script>
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher()

    let giorno = "GG"
    let mese = "MM"
    let anno = "AAAA"

    let mesi = [
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
        "Dicembre"
    ]

    function new_event(event){
        dispatch("newDate", {
            "tipo":event,
            "date": giorno+" "+mese+" "+anno
        })
    }

    let anni = Array(2024)  
    for (let i = 0; i < 2024; i++) {
        anni[i] = i
    }

    
</script>

<div class="box">

    <div class="data">{giorno}</div>

    <div class="data">{mese}</div>

    <div class="data">{anno}</div>

    <button on:click={new_event("selectDate")}>Select</button>

    <select id='giorno' bind:value={giorno} size="10">
        {#each Array(31).keys() as key}
            <option value={key+1}>{key+1}</option>
        {/each}
    </select>

    <select id='mese' bind:value={mese} size="10">
        {#each mesi as mese}
            <option value={mese}>{mese}</option>
        {/each}
    </select>

    <select id='giorno' bind:value={anno} size="10">
        {#each anni.reverse() as anno}
            {#if anno>1900}
                <option value={anno}>{anno}</option>
            {/if}
        {/each}
    </select>

</div>

<style>

    .box{
        width: 50%;
        display: grid;
        grid-template-columns: 1fr 1fr 2fr 1fr; 
        margin: auto;
        margin-top: 100px;
    }

    .box .data{
        background-color: lightgray;
        margin-left: 10px;
        margin-right: 10px;
        padding: 10px;
        border-radius: 10px;
        text-align: center;
    }

    .box button{
        background-color: lightgray;
        border: 0;
        border-radius: 10px;
        transition: 0.5s;
    }
    .box button:hover{
        cursor: pointer;
        box-shadow: 2px 2px 15px 0px black ;
    }

    .box select{
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        outline-width: 0;
        border-radius: 10px;
        padding: 10px;
        border: 0;
        background-color: lightgray;
    }

</style>