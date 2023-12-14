
<script>
    let nome;
    let cognome; 
    let età;
    let residenza;
    let confermato = false;
</script>


<h1>Input Page</h1>

Nome <input bind:value={nome}>
Cognome <input bind:value={cognome}>
Età <input  bind:value={età}>
Residenza <input bind:value={residenza}/>

<br><br>

Confermi ? <input type="checkbox" bind:checked={confermato}>

<hr>

<p>Io sono {nome} {cognome} ed ho {età} anni e abito a {residenza}.</p>

<button disabled={!confermato}>Conferma</button>

<style>
    input{
        border-radius: 5px;
        height: 30px;
        font-size: large;
        
    }

    hr{
        
        border: 2px solid darkblue;
        
    }



    button{
        border-radius: 5px;
        height: 30px;
        font-size: large;
    }
</style>

