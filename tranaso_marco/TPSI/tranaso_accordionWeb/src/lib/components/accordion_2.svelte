<script>
    let icona = "keyboard_arrow_up";
    let testo = false;
    import {open} from "../js/store.js"
    
    function cambia_icona() {
        icona = icona === 'keyboard_arrow_up' ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
        testo = !testo;
  
    
    let status = false;
    
    $open = status;

        if (!$open) {
            $open = status = true;
        } else if (status){
            status = $open = false;
        }
    };
</script>

<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
<div class="container">
    <div class="item1"><h3>My header 2</h3></div>
    <div class="item2" style="text-align: left;"> 
        <span on:click={cambia_icona} id="ciao" class="material-symbols-outlined">
            {icona}
        </span>

    </div>
    
</div>
{#if testo}
<p class="par1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ut id mollitia quas, consectetur adipiscing elit. Illo ab necessitarum sint explicabo ...
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ut id mollitia quas, consectetur adipiscing elit. Illo ab necessitarum sint explicabo ...
    Learn more about these technologies 
   
    <br>

 <span style="display: inline;color:#CF00F4">
        <ul>
            <li>Lorem ipsum</li>
            <li>Tailwind UI</li>
        </ul>
    </span> 
</p>
        <p class="no-bordo">
        {/if}
<style>
    .par1 {
        border: 2px solid #e6e6ec;
        width: 59%;
        margin: auto;
        color:#747475;
        font-size:18px;
        padding:10px;

    }
    .container {
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 5px;
        border: 5px solid #e6e6ec;
        background-color: #f3f4f6;
        margin: auto;
        justify-content: space-between;
    }
    .item2 {
        margin-top: 20px;
        line-height: 20px;
        padding-right: 10px;
    }
    .no-bordo {
        border: 2px solid transparent;
    }

</style>
