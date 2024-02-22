<script>

    let giorno ;
    let mese;
    let anno;
    

    let data;


    let anno_defualt = '2023';
    
    let annoVet = [
        '2023',
        '2022',
        '2021',
        '2020',
        '2019',
        '2018',
        '2017',
        '2016',
        '2015',
        '2014',
        '2013',
        '2012',
        '2011',
        '2010',
        '2009',
        '2008',
        '2007',
        '2006',
        '2005',
        '2004',
        '2003',
        '2002',
        '2001',
        '2000',
    ]

    let giornoVet = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
    ]

    let GG = "GG";
    let MM = "MM";
    let AAAA = "AAAA";

    function change_date() {
        GG = giorno;
        MM = mese;
        AAAA = anno;

    }


</script>

<div class="container">
    
    <h1>L'utente ha selezionato {GG} - {MM} - {AAAA}</h1>
    
        <label for="day">{giorno}</label>
        <label for="month">{mese}</label>
        <label for="year">{anno}</label>
        <button on:click={change_date} >Select</button>
    
        <select name="Date_Day" id="day" bind:value={giorno}>
                {#each giornoVet as value}<option {value}> {value} </option>

                {/each}
            </select>

            

            <select name="month" bind:value={mese} >
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12" selected="selected">December</option>
            </select>


            <select name="year" bind:value={anno} >
                {#each annoVet as value}<option {value}> {value} </option>

                {/each}
            </select>
                

</div>





<style>
    

    label{
        text-align: center;
        width: 50%;
        padding: 10px;
        border: 2px solid black;
        margin: auto;
        font-size: 20px;
        border-radius: 8px;
    }

    select{
        text-align: center;
        width: 50%;
        padding: 10px;
        border: 2px solid black;
        margin: auto;
        font-size: 20px;
        border-radius: 8px;
    }

    button{
        width: 50%;
        font-size: 20px;
        box-shadow: 6px 5px 10px;
    }




    .container{
        display: grid;
        width: 80%;
        height: 80vh;
        margin: auto;
        justify-content: center;
        margin-top: 5%;
        row-gap: 10px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 0.2fr 0fr 0fr;
        border: 1px solid;
        box-shadow: 2px 4px 8px 5px grey;
        
        
    }




    h1{
        font-size: 30px;
        text-align: center;
        grid-column-start: 1;
        grid-column-end: 5;
    }



</style>


