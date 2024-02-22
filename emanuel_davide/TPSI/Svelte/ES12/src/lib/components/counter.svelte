<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet">
</svelte:head>
<script>
    export let contatore = 0; // stato di un contatore
    function counter_incr() {
		contatore+= 1;
	}
    function couter_decr(){
        contatore-=1;
    }
    
</script>

<div class="container">
    <div class="pulsante">
        <button on:click={couter_decr}>
            <span class="material-symbols-outlined icon">remove</span>
        </button>
    </div>
    <div class="number">
        {contatore}
    </div>
    <div class="pulsante">
        <button on:click={counter_incr}>
            <span class="material-symbols-outlined icon">add</span>
        </button>
    </div>
    
</div>
<style>
.container{
    border: 4px solid #D43C2F;
    display: flex;
    justify-content: space-between; 
    border-radius: 30px;
    width: 300px;
    padding: 10px;
    }
    .pulsante{
        display: flex;
        align-items: center;
    }
    button{
        border: none;
        background: none;
    }
    .icon{
        font-size: 2.5ren;
        color: #F89C88;
        font-weight: bolder;
    }
    .icon:hover{
        color: #D43C2f;
        cursor: pointer;
    }
    .icon:active{
        text-shadow: 1px 1px 18 px #D43C2F;
    }
    .number{
        font-size: 4ren;
        font-family: 'Bungee Spice',cursive;
    }

</style>




