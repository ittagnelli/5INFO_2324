<script>
    import { store_anno } from "../js/store.js";
    let anno = "2023";
    let anni = [];
    export let annoselezionato= "AAAA";
  
    for (let i = 2000; i <= anno; i++) {
      anni.push(i);
    }
  
    function stampa(event) {
      annoselezionato= event.target.value;
      store_anno.set(annoselezionato);
    }
</script>

<div>
  <div>
    <input class="label" type="text" placeholder="AAAA" bind:value={annoselezionato} readonly/>
  </div>
  <br>
  <select on:change={stampa} class="anno">
    {#each anni as i }
      <option value={i}>{i}</option>
    {/each}
  </select>
</div>
  
<style>
    .anno {
        width: 83%;
        padding: 5%;
    }

    .label {
        text-align: center;
        width: 70%;
        padding: 5%;
    }

</style>