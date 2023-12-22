<script>
    import {store_giorno} from './store';
    const grigio=false;

    const set_1=()=>{$store_giorno=1;}
    const set_2=()=>{$store_giorno=2;}
    const set_3=()=>{$store_giorno=3;}
    const set_4=()=>{$store_giorno=4;}
    const set_5=()=>{$store_giorno=5;}
    const set_6=()=>{$store_giorno=6;}
    const set_7=()=>{$store_giorno=7;}
    const set_8=()=>{$store_giorno=8;}
    const set_9=()=>{$store_giorno=9;}
    const set_10=()=>{$store_giorno=10;}
    const set_11=()=>{$store_giorno=11;}
    const set_12=()=>{$store_giorno=12;}
    const set_13=()=>{$store_giorno=13;}
    const set_14=()=>{$store_giorno=14;}
    const set_15=()=>{$store_giorno=15;}
    const set_16=()=>{$store_giorno=16;}
    const set_17=()=>{$store_giorno=17;}
    const set_18=()=>{$store_giorno=18;}
    const set_19=()=>{$store_giorno=19;}
    const set_20=()=>{$store_giorno=20;}
    const set_21=()=>{$store_giorno=21;}
    const set_22=()=>{$store_giorno=22;}
    const set_23=()=>{$store_giorno=23;}
    const set_24=()=>{$store_giorno=24;}
    const set_25=()=>{$store_giorno=25;}
    const set_26=()=>{$store_giorno=26;}
    const set_27=()=>{$store_giorno=27;}
    const set_28=()=>{$store_giorno=28;}
    const set_29=()=>{$store_giorno=29;}
    const set_30=()=>{$store_giorno=30;}
    const set_31=()=>{$store_giorno=31;}
</script>

<main>
    <button on:click={set_1} class:grigio={$store_giorno==1}>01</button>
    <button on:click={set_2} class:grigio={$store_giorno==2}>02</button>
    <button on:click={set_3} class:grigio={$store_giorno==3}>03</button>
    <button on:click={set_4} class:grigio={$store_giorno==4}>04</button>
    <button on:click={set_5} class:grigio={$store_giorno==5}>05</button>

    <button on:click={set_6} class:grigio={$store_giorno==6}>06</button>
    <button on:click={set_7} class:grigio={$store_giorno==7}>07</button>
    <button on:click={set_8} class:grigio={$store_giorno==8}>08</button>
    <button on:click={set_9} class:grigio={$store_giorno==9}>09</button>
    <button on:click={set_10} class:grigio={$store_giorno==10}>10</button>

    <button on:click={set_11} class:grigio={$store_giorno==11}>11</button>
    <button on:click={set_12} class:grigio={$store_giorno==12}>12</button>
    <button on:click={set_13} class:grigio={$store_giorno==13}>13</button>
    <button on:click={set_14} class:grigio={$store_giorno==14}>14</button>
    <button on:click={set_15} class:grigio={$store_giorno==15}>15</button>

    <button on:click={set_16} class:grigio={$store_giorno==16}>16</button>
    <button on:click={set_17} class:grigio={$store_giorno==17}>17</button>
    <button on:click={set_18} class:grigio={$store_giorno==18}>18</button>
    <button on:click={set_19} class:grigio={$store_giorno==19}>19</button>
    <button on:click={set_20} class:grigio={$store_giorno==20}>20</button>

    <button on:click={set_21} class:grigio={$store_giorno==21}>21</button>
    <button on:click={set_22} class:grigio={$store_giorno==22}>22</button>
    <button on:click={set_23} class:grigio={$store_giorno==23}>23</button>
    <button on:click={set_24} class:grigio={$store_giorno==24}>24</button>
    <button on:click={set_25} class:grigio={$store_giorno==25}>25</button>

    <button on:click={set_26} class:grigio={$store_giorno==26}>26</button>
    <button on:click={set_27} class:grigio={$store_giorno==27}>27</button>
    <button on:click={set_28} class:grigio={$store_giorno==28}>28</button>
    <button on:click={set_29} class:grigio={$store_giorno==29}>29</button>
    <button on:click={set_30} class:grigio={$store_giorno==30}>30</button>

    <button on:click={set_31} class:grigio={$store_giorno==31}>31</button>
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
        width: 25%;
        font-size: 15px !important;
        margin-bottom: 5%;
    }
    button:hover{
        background-color: gray;
    }
    .grigio{background-color: gray;}
</style>