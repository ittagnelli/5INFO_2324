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
    <select on:change={stampa} id="giorno">
      {#each giorni as i }
        <option value={i}>{i}</option>
      {/each}
    </select>
  </div>
  
  <style>
     #giorno{
    width: 85px;
    height: 20px;
 }

  </style>