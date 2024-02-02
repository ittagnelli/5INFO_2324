<script>
    import {store_num_m} from "../js/store.js";
    
    
    function cambia ()
    {
        store_num_m.set(mese1);
    }
    let mese1 = "MM";
</script>

<div id="me">
    <input type="mese" id="ms" placeholder="MM" value={mese1}>
    <select name="mese" id="sct_mese" bind:value={mese1} on:change={cambia} size="8">
        <option value=""></option>
        <option value="gennaio">Gennaio</option> <option value="febbraio">Febbraio</option> <option value="marzo">Marzo</option>
        <option value="aprile">Aprile</option> <option value="maggio">Maggio</option> <option value="giugno">Giugno</option>
        <option value="luglio">Luglio</option> <option value="agosto">Agosto</option> <option value="settembre">Settembre</option>
        <option value="ottobre">Ottobre</option> <option value="novembre">Novembre</option> <option value="dicembre">Dicembre</option>
    </select>
</div>



<style>
    /*ms(input) e sct_mese(select)*/
    #ms
    {
        text-align: center;
        font-size: 1.5rem;
        
    }
    #sct_mese
    {
        width: 100%;
    }

    #me
    {
        width: 27%;
        /*height: 2.5rem;*/
        display: flex;
        flex-direction: column;
    }
</style>