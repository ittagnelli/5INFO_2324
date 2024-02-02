<script>
  import { store_mese } from "../js/store";
  
      let mese=[
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
  ];
  let meseselezionato="";
  function stampa(event) {
      meseselezionato= event.target.value;
      store_mese.set(meseselezionato);
    }
</script>

<div>

</div>
<select on:change={stampa} bind:value={meseselezionato}>
    <option value="" disabled hidden>MM</option>
    {#each mese as mese}
      <option  id="mese" value={mese}>{mese}</option>
    {/each}
  </select>
  
<style>
    div {
        text-align: center;
    }
    #mese{
    width: 85px;
    height: 20px;
 }

</style>
