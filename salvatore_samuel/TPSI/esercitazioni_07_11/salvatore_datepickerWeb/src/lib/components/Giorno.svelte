<script>
    import { store_giorno } from "../js/store.js";
    let giorno = "31";
    let giorni = [];
    let giornoselezionato= "";
  
    for (let i = 1; i <= giorno; i++) {
      giorni.push(i);
    }
  
    function stampa(event) {
      giornoselezionato= event.target.value;
      store_giorno.set(giornoselezionato);
    }
</script>

<div>
    <div>
        <input class="label" type="text" placeholder="GG" bind:value={giornoselezionato} readonly/>
    </div>
    <br>
    <select on:change={stampa} class="giorno">
      {#each giorni as i }
        <option value={i}>{i}</option>
      {/each}
    </select>
</div>
  
<style>
    
    .giorno {
        width: 37%;
        padding: 5%;
    }

    .label {
        text-align: center;
        width: 25%;
        padding: 5%;
    }

</style>