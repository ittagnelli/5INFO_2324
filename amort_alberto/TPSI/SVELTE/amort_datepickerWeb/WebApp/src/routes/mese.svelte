<script>
        import {store_mese} from "./store.js";

    

    export let mesi = ["Gen", "Feb", "Mar", "Apr" , "Mag" , "Giug" , "Lug" , "Ago" , "Set" , "Ott", "Nov", "Dec" ] ;
</script>


<select class="mese" size="10">

    {#each mesi as mese}
    <option value={mese} on:click={() => $store_mese=mese}>{mese}</option>
    {/each}
</select>