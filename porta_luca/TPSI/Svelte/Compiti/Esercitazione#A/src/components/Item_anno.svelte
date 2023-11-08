<script>
    import {store_anno} from './store';
    const grigio=false;
    const set_2023=()=>{$store_anno=2023;}
    const set_2022=()=>{$store_anno=2022;}
    const set_2021=()=>{$store_anno=2021;}
    const set_2020=()=>{$store_anno=2020;}
    const set_2019=()=>{$store_anno=2019;}
    const set_2018=()=>{$store_anno=2018;}
    const set_2017=()=>{$store_anno=2017;}
    const set_2016=()=>{$store_anno=2016;}
    const set_2015=()=>{$store_anno=2015;}
    const set_2014=()=>{$store_anno=2014;}
    const set_2013=()=>{$store_anno=2013;}
    const set_2012=()=>{$store_anno=2012;}
    const set_2011=()=>{$store_anno=2011;}
    const set_2010=()=>{$store_anno=2010;}
    const set_2009=()=>{$store_anno=2009;}
    const set_2008=()=>{$store_anno=2008;}
    const set_2007=()=>{$store_anno=2007;}
    const set_2006=()=>{$store_anno=2006;}
    const set_2005=()=>{$store_anno=2005;}
    const set_2004=()=>{$store_anno=2004;}
    const set_2003=()=>{$store_anno=2003;}
    const set_2002=()=>{$store_anno=2002;}
    const set_2001=()=>{$store_anno=2001;}
    const set_2000=()=>{$store_anno=2000;}
</script>

<main>
    <button on:click={set_2023} class:grigio={$store_anno==2023}>2023</button>
    <button on:click={set_2022} class:grigio={$store_anno==2022}>2022</button>
    <button on:click={set_2021} class:grigio={$store_anno==2021}>2021</button>

    <button on:click={set_2020} class:grigio={$store_anno==2020}>2020</button>
    <button on:click={set_2019} class:grigio={$store_anno==2019}>2019</button>
    <button on:click={set_2018} class:grigio={$store_anno==2018}>2018</button>
    <button on:click={set_2017} class:grigio={$store_anno==2017}>2017</button>
    <button on:click={set_2016} class:grigio={$store_anno==2016}>2016</button>

    <button on:click={set_2015} class:grigio={$store_anno==2015}>2015</button>
    <button on:click={set_2014} class:grigio={$store_anno==2014}>2014</button>
    <button on:click={set_2013} class:grigio={$store_anno==2013}>2013</button>
    <button on:click={set_2012} class:grigio={$store_anno==2012}>2012</button>
    <button on:click={set_2011} class:grigio={$store_anno==2011}>2011</button>

    <button on:click={set_2010} class:grigio={$store_anno==2010}>2010</button>
    <button on:click={set_2009} class:grigio={$store_anno==2009}>2009</button>
    <button on:click={set_2008} class:grigio={$store_anno==2008}>2008</button>
    <button on:click={set_2007} class:grigio={$store_anno==2007}>2007</button>
    <button on:click={set_2006} class:grigio={$store_anno==2006}>2006</button>

    <button on:click={set_2005} class:grigio={$store_anno==2005}>2005</button>
    <button on:click={set_2004} class:grigio={$store_anno==2004}>2004</button>
    <button on:click={set_2003} class:grigio={$store_anno==2003}>2003</button>
    <button on:click={set_2002} class:grigio={$store_anno==2002}>2002</button>
    <button on:click={set_2001} class:grigio={$store_anno==2001}>2001</button>

    <button on:click={set_2000} class:grigio={$store_anno==2000}>2000</button>
</main>

<style>
    main{
        border: 2px solid gray;
        width: 20%;
        height: 60%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    button{
        border: none;
        background-color: white;
        width: 30%;
        font-size: 15px !important;
        margin-bottom: 5%;
    }
    button:hover{
        background-color: gray;
    }
    .grigio{background-color: gray;}
</style>