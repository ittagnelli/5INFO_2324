<svelte:head>
    <link href="https://fonts.googleapis.com/css2?
    family=Material+Symbols+Outlined:opsz, wght, FILL, GRAD@48,400,0,0" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Bungee+Spice&display=swap"
    rel="stylesheet">
</svelte:head>

<script>
    import Counter from "../../lib/components/counter.svelte";

    let un=true, verde = true;
    let cont = 0;
    let doppio, triplo;
    $:doppio=cont*2;
    $:triplo=cont*3;
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
            <h2>Pagina Counter!!!</h2>
            <h2 class:un>Il contatore ha come valore un mezzo di: {doppio}</h2>
            <h2 class:un>Il contatore ha come valore un terzo di: {triplo}</h2>
            <h1 class:verde={cont%2!=0}>Il contatore ha il valore: {cont}</h1>
            <Counter bind:cont={cont}/>
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
.verde{color: lime;}
.un{text-decoration: underline;}
</style>