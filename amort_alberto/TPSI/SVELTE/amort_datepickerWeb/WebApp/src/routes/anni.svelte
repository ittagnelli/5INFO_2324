<script>
    import {store_anno} from './store.js';


    export let anni = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000] ;
</script>


<select class="anni" size="10"> 

    {#each anni as anno }
    <option value={anno} on:click={() => $store_anno=anno}> {anno}</option> 
    {/each}
</select>


