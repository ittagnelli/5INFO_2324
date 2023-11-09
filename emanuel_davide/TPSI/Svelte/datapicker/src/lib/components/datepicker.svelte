<script>
  let giorno = "GG";
  let mese = "MM";
  let anno = "AAAA";
  let buttonClicked = false;

  const updateDay = () => {
      const selectOption_day = document.getElementById("num_day");
      giorno = selectOption_day.value;
  }

  const updateMounth = () => {
      const selectOption_mounth = document.getElementById("nome_mounth");
      mese = selectOption_mounth.value;
  }

  const updateYear = () => {
      const selectOption_year = document.getElementById("num_year");
      anno = selectOption_year.value;
  }

  const selectButton = () => {
      buttonClicked = true
  }   
</script>

{#if buttonClicked}
  <h1>L'utente ha selezionato {giorno} - {mese} - {anno}</h1>
      {:else}
  <h1>L'utente ha selezionato GG - MM - AAAA</h1>
{/if}

<div class="contanier">
  <div class="day">
      <input type="text" bind:value={giorno} class="day_mounth" readonly>

      <select size="4" id="num_day" on:change={updateDay}>
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
  </div>

  <div class="mounth">
      <input type="text" bind:value={mese} class="day_mounth" readonly>

      <select size="4" id="nome_mounth" on:change={updateMounth}>
          <option value="Gen">Gennaio</option>
          <option value="Feb">Febbraio</option>
          <option value="Mar">Marzo</option>
          <option value="Apr">Aprile</option>
          <option value="Mag">Maggio</option>
          <option value="Giu">Giugno</option>
          <option value="Lug">Luglio</option>
          <option value="Ago">Agosto</option>
          <option value="Set">Settembre</option>
          <option value="Ott">Ottobre</option>
          <option value="Nov">Novembre</option>
          <option value="Dic">Dicembre</option>
      </select>
  </div>

  <div class="year">
      <input type="text" bind:value={anno} readonly>

      <select size="4" id="num_year" on:change={updateYear}>
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
          <option value="2005">2004</option>
          <script>
              let giorno = "GG";
              let mese = "MM";
              let anno = "AAAA";
              let buttonClicked = false;
          
              const updateDay = () => {
                  const selectOption_day = document.getElementById("num_day");
                  giorno = selectOption_day.value;
              }
          
              const updateMounth = () => {
                  const selectOption_mounth = document.getElementById("nome_mounth");
                  mese = selectOption_mounth.value;
              }
          
              const updateYear = () => {
                  const selectOption_year = document.getElementById("num_year");
                  anno = selectOption_year.value;
              }
          
              const selectButton = () => {
                  buttonClicked = true
              }   
          </script>
          
          {#if buttonClicked}
              <h1>L'utente ha selezionato {giorno} - {mese} - {anno}</h1>
                  {:else}
              <h1>L'utente ha selezionato GG - MM - AAAA</h1>
          {/if}
          
          <div class="contanier">
              <div class="day">
                  <input type="text" bind:value={giorno} class="day_mounth" readonly>
          
                  <select size="4" id="num_day" on:change={updateDay}>
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
              </div>
          
              <div class="mounth">
                  <input type="text" bind:value={mese} class="day_mounth" readonly>
          
                  <select size="4" id="nome_mounth" on:change={updateMounth}>
                      <option value="Gen">Gennaio</option>
                      <option value="Feb">Febbraio</option>
                      <option value="Mar">Marzo</option>
                      <option value="Apr">Aprile</option>
                      <option value="Mag">Maggio</option>
                      <option value="Giu">Giugno</option>
                      <option value="Lug">Luglio</option>
                      <option value="Ago">Agosto</option>
                      <option value="Set">Settembre</option>
                      <option value="Ott">Ottobre</option>
                      <option value="Nov">Novembre</option>
                      <option value="Dic">Dicembre</option>
                  </select>
              </div>
          
              <div class="year">
                  <input type="text" bind:value={anno} readonly>
          
                  <select size="4" id="num_year" on:change={updateYear}>
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
              </div>
          
              <button on:click={selectButton}>Select</button>
          </div>
          
          <style>
              h1{
                  text-align: center;
                  font-weight: normal;
              }
          
              .contanier{
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: row;
              }
          
              input{
                  text-align: center;
                  margin-left: 1.5em;
                  height: 2em;
                  border: 1px solid grey;
                  margin-bottom: 1em;
                  margin-top: 1em;
              }
          
              .day_mounth{
                  width: 6em;
                  margin-bottom: 1em;
                  margin-top: 1em;
              }
          
              .contanier button{
                  margin-left: 1.5em;
                  height: 2.3em;
                  width: 8em;
                  border: none;
                  border-radius: 2px;
                  background-color: rgb(203, 203, 203);
                  margin-bottom: 5.25em;
              }
          
              .day{
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
              }
          
              .mounth{
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
              }
          
              .year{
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
              }
          
              .contanier .day select{
                  margin-left: 1.5em;
              }
          
              .contanier .mounth select{
                  margin-left: 1.5em;
              }
          
              .contanier .year select{
                  margin-left: 1.5em;
              }
          </style> <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
      </select>
  </div>

  <button on:click={selectButton}>Select</button>
</div>

<style>
  h1{
      text-align: center;
      font-weight: normal;
  }

  .contanier{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
  }

  input{
      text-align: center;
      margin-left: 1.5em;
      height: 2em;
      border: 1px solid grey;
      margin-bottom: 1em;
      margin-top: 1em;
  }

  .day_mounth{
      width: 6em;
      margin-bottom: 1em;
      margin-top: 1em;
  }

  .contanier button{
      margin-left: 1.5em;
      height: 2.3em;
      width: 8em;
      border: none;
      border-radius: 2px;
      background-color: rgb(203, 203, 203);
      margin-bottom: 5.25em;
  }

  .day{
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

  .mounth{
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

  .year{
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

  .contanier .day select{
      margin-left: 1.5em;
  }

  .contanier .mounth select{
      margin-left: 1.5em;
  }

  .contanier .year select{
      margin-left: 1.5em;
  }
</style>