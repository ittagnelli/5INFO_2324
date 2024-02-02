
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

<div id="tutto" on:click={change_prio}>
    <div id="sin"><h3>My Header 2</h3></div>
   
    <div id="des"><span class="material-symbols-outlined" >expand_more</span></div>
</div>


<style>
    #tutto
    {
        height: 4rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgb(230, 230, 230);

        padding-left: 3%;
        padding-right: 3%;
        
        
        border: 2px solid rgb(167, 166, 166);
    }
    #des:active
    {
        transform: rotate(180deg);
        transform: translate(25rem 10rem);
        
    }
    h3
    {
        line-height: 1.5rem;
    }
    .material-symbols-outlined 
    {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
    }

    #sin
    {
        
    }
    #des
    {
        padding-top: 3%;
        cursor: pointer;
        
    }
    span
    {
        transform: scale(1.5);
    }
</style>