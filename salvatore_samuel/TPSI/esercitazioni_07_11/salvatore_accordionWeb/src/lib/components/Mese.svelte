<script>
    import { store_mese } from "../js/store.js";
    let mese = "Dicembre";
    let mesi= ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    export let meseselezionato= "MM";
  
    for (let i = 1; i <= mese; i++) {
      mesi.push(i);
    }
  
    function stampa(event) {
      meseselezionato= event.target.value;
      store_mese.set(meseselezionato);
    }
</script>

<div>
  <div>
    <input class="label" type="text" placeholder="MM" bind:value={meseselezionato} readonly/>
  </div>
  <br>
  <select on:change={stampa} class="mese">
    {#each mesi as i }
      <option value={i}>{i}</option>
    {/each}
  </select>
</div>
  
<style>
    .mese {
        width: 63%;
        padding: 5%;
    }

    .label {
        text-align: center;
        width: 50%;
        padding: 5%;
    }

</style>