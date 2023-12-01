<script>
    import { store_anno } from "../js/store";
    let anno = 2023;
    let anni = [];
  
    for (let i = anno; i >= anno - 100; i--) {
      anni.push(i);
    }
  
    let annoSelezionato = anno; 
  
    function stampa() {
      annoSelezionato = parseInt(document.getElementById("anno").value);
      store_anno.set(annoSelezionato);
    }
  </script>
  
  <select on:change={stampa} id="anno">
    {#each anni as i}
      <option value={i}>{i}</option>
    {/each}
  </select>
  
  