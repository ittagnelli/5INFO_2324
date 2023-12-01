<script>

    import {store_giorno} from "./store.js";
    

    export let giorni = ["01", "02", "03", "04" , "05" , "06" , "07" , "08" , "09" , "10" , "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21","22", "23","24","25","26","27", "28","29","30",
    "31"   ] ;
</script>

<select class="giorni" size="10">

    {#each giorni as giorno}
    <option value={giorno} on:click={() => $store_giorno=giorno}>{giorno}</option>
    {/each}
</select>

