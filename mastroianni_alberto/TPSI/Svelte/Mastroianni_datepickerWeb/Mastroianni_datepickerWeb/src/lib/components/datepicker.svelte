<script>
  let day = "GG";
  let month = "MM";
  let year = "AAAA";
  let selectionText = "L'utente ha selezionato GG - MM - AAAA";

  function handleDayChange(event) {
    day = event.target.value;
  }

  function handleMonthChange(event) {
    month = event.target.value;
  }

  function handleYearChange(event) {
    year = event.target.value;
  }

  function newDate() {
    selectionText = `L'utente ha selezionato ${day} - ${month} - ${year}`;
  }

    let anni = []
    for(let i = 2024; i>=1900; i--)
    {
        anni.push(i)
    }

    

</script>



<h1>{selectionText}</h1>

<div class="container">


    <div class="giorno">
        <input type="text" class="giorno_mese" placeholder="GG" readonly bind:value={day}>
        <select id="n_day" on:change={handleDayChange}>
          {#each Array(31).keys() as k}
            <option value={k+1}>{k+1}</option>
          {/each}
        </select>
      </div>
      
      <div class="mese">
        <input type="text" class="giorno_mese" placeholder="MM" readonly bind:value={month}>
        <select id="n_month" on:change={handleMonthChange}>
          {#each Array(12).keys() as k}
         <option value={k+1}>{k+1}</option>
          {/each}
        </select>
      </div>
    

<div class="anno">
<input type="text" class="anno" placeholder="AAAA" readonly bind:value={year}>
<select id="n_year" on:change={handleYearChange}>
    {#each anni as i}
    <option value={i}>{i}</option>
    {/each}
</select>

</div>


<button on:click={newDate}>Select</button>

</div>



<style>
    .container {
      text-align: center;
      width: 80%; /* Larghezza del container rispetto al viewport */
      max-width: 600px; /* Larghezza massima del container */
      padding: 40px;
      background-color: #f5f5f5;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    h1{
        text-align: center;
    }

    </style>
  
  