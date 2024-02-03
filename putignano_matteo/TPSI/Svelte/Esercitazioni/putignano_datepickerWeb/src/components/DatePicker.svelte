<script>
    let giorno, mese, anno;
    let seleziona = false;
    export let GG = "GG", MM = "MM", AAAA = "AAAA";

    function exp() {
        GG = giorno;
        MM = mese;
        AAAA = anno;
    }
</script>

<input type="text" placeholder="GG" bind:value={giorno} readonly>
<input type="text" placeholder="MM" bind:value={mese} readonly>
<input type="text" placeholder="AAAA" bind:value={anno} readonlyù>
<button on:click={exp}>Select</button>
<br><br>

<select bind:value={giorno} class="select" size="6">
    <option value="01">01</option>
    <option value="02">02</option>
    <option value="03">03</option>
    <option value="04">04</option>
    <option value="05">05</option>
    <option value="06">06</option>
    <option value="07">07</option>
    <option value="08">08</option>
    <option value="09">09</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
</select>
<select bind:value={mese} class="select" size="6">
    <option value="GEN">GEN</option>
    <option value="FEB">FEB</option>
    <option value="MAR">MAR</option>
    <option value="APR">APR</option>
    <option value="MAG">MAG</option>
    <option value="GIU">GIU</option>
    <option value="LUG">LUG</option>
    <option value="AGO">AGO</option>
    <option value="SET">SET</option>
    <option value="OTT">OTT</option>
    <option value="NOV">NOV</option>
    <option value="DIC">DIC</option>
</select>
<select bind:value={anno} class="select" size="6">
    <option value="2023">2023</option>
    <option value="2022">2022</option>
    <option value="2021">2021</option>
    <option value="2020">2020</option>
    <option value="2019">2019</option>
    <option value="2018">2018</option>
    <option value="2017">2017</option>
    <option value="2016">2016</option>
    <option value="2015">2015</option>
    <option value="2014">2014</option>
    <option value="2013">2013</option>
    <option value="2012">2012</option>
    <option value="2011">2011</option>
    <option value="2010">2010</option>
    <option value="2009">2009</option>
    <option value="2008">2008</option>
    <option value="2007">2007</option>
    <option value="2006">2006</option>
    <option value="2005">2005</option>
    <option value="2004">2004</option>
    <option value="2003">2003</option>
    <option value="2002">2002</option>
    <option value="2001">2001</option>
    <option value="2000">2000</option>
</select>   

<style>
    .select{
        width: 24.3%;
    }
</style>