<svelte:head>
    <link href="https://fonts.googleapis.com/css2?
    family=Material+Symbols+Outlined:opsz, wght, FILL, GRAD@48,400,0,0" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Bungee+Spice&display=swap"
    rel="stylesheet">
</svelte:head>

<script>
    import DoubleCounter from '../../lib/components/Double_Counter.svelte';

    export let cont_doppio = 0;
    function gestisci_evento(evento){
        alert('${evento.detail.tipo} -- ${evento.detail.valore}');
    }
</script>

<main>
    <header>
        <h1>Web App</h1>
    </header>
    <section>
        <nav>
        <ul>
            <li class="giallo"><a href="../">Home</a></li>
        </ul>
        </nav>
        <article>
            <h1>Pagina Double Counter!!!</h1>
            <h1>Il contatore ha il valore: {cont_doppio}</h1>
            <DoubleCounter bind:cont_doppio={cont_doppio} on:cont_doppio={gestisci_evento}/>
        </article>
    </section>
    <footer>
    <h4>Copyright &copy; Luca Porta</h4>
    </footer>
</main>

<style>
main {
    display: flex;
    flex-direction: column; 
    height: 100vh; 
    box-sizing: border-box;
    color: white;    
}
header {
    background-color: #023e8a; 
    text-align: center;
}
section {
    display: flex; flex-direction: row;
    flex: 10;
}
nav {
    flex: 1;
    background-color: #0077b6;
}

nav ul {
list-style: none; 
}
nav ul li { 
    padding: 10px;
}
nav ul li a {
color: white; 
text-decoration: none; 
font-size: 30px; 
font-weight: bolder;
}
article { 
    color: #03045e;
     padding: 20px;
      font-size: 30px;
       flex: 8;
}
footer {
background-color: #03045e; 
text-align: center; 
font-size: 20px;
flex: 1;
}
.giallo{border: 5px solid yellow;}
</style>