<script>
    let giorno = "GG";
    let days = [];
    let mese = "MM";
    let months = 
    ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
    let anno = "AAAA";
    let years = [];
    let buttonClicked = false;

    const updateDay = () => {
        const selectOption_day = document.getElementById("num_day");
        giorno = selectOption_day.value;
    }

    for (let i = 1; i <= 31; i++) {
        const day = i < 10 ? `0${i}` : `${i}`;
        days.push(day);
    } 

    const updateMounth = () => {
        const selectOption_mounth = document.getElementById("nome_mounth");
        mese = selectOption_mounth.value;
    }

    const updateYear = () => {
        const selectOption_year = document.getElementById("num_year");
        anno = selectOption_year.value;
    }

    for (let j = 2023; j >= 2000; j--) {
        years.push(j);
    }

    const selectButton = () => {
        buttonClicked = true
    }   
</script>

{#if buttonClicked}
    <h1>L'utente ha selezionato {giorno} - {mese} - {anno}</h1>
        {:else}
    <h1>L'utente ha selezionato GG - MM - AAAA</h1>
{/if}

<div class="contanier">
    <div class="day">
        <input type="text" bind:value={giorno} class="day_mounth" readonly>

        <select size="4" id="num_day" on:change={updateDay}>
            {#each days as day (day)}
                <option value={day}>{day}</option>
            {/each}
        </select>
    </div>

    <div class="mounth">
        <input type="text" bind:value={mese} class="day_mounth" readonly>

        <select size="4" id="nome_mounth" on:change={updateMounth}>
            {#each months as month (month)}
                <option value={month}>{month}</option>
            {/each}
        </select>
    </div>

    <div class="year">
        <input type="text" bind:value={anno} readonly>

        <select size="4" id="num_year" on:change={updateYear}>
            {#each years as year (year)}
                <option value={year}>{year}</option>
            {/each}
        </select>
    </div>

    <button on:click={selectButton}>Select</button>
</div>

<style>
    h1{
        text-align: center;
        font-weight: normal;
    }

    .contanier{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    input{
        text-align: center;
        margin-left: 1.5em;
        height: 2em;
        border: 1px solid grey;
        margin-bottom: 1em;
        margin-top: 1em;
    }

    .day_mounth{
        width: 6em;
        margin-bottom: 1em;
        margin-top: 1em;
    }

    .contanier button{
        margin-left: 1.5em;
        height: 2.3em;
        width: 8em;
        border: none;
        border-radius: 2px;
        background-color: rgb(203, 203, 203);
        margin-bottom: 5.25em;
    }

    .day{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .mounth{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .year{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .contanier .day select{
        margin-left: 1.5em;
    }

    .contanier .mounth select{
        margin-left: 1.5em;
    }

    .contanier .year select{
        margin-left: 1.5em;
    }
</style>