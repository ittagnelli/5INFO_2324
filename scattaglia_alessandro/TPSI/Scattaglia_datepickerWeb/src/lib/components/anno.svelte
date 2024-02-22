<script>
    let selectedAnno = "AAAA";

    function updateYear() {
        store_anno.set(selectedAnno);
    }
    import { store_anno } from "../js/store.js";
</script>

<div>
    <input class="year" value={selectedAnno} readonly /><br />
    <select size="6" id="Year" bind:value={selectedAnno} on:change={updateYear}>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
    </select>
</div>

<style>
    .year {
        width: 80px;
        padding: 10px;
        text-align: center;
    }

    div {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #Year {
        width: 100px;
    }
</style>
