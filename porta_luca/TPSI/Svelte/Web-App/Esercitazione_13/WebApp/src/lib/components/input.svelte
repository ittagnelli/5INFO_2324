<script>
    let nome, cognome, eta;
    let confermato = false;
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
            <h1>
                Nome <input bind:value={nome}>
                Cognome <input bind:value={cognome}>
                Eta <input bind:value={eta}>
                <br><br>
                Io sono {nome} {cognome} e ho {eta} anni.
                <br><br>
                Confermato <input type="checkbox" bind:checked={confermato}>
                <br><br>
                <button disabled={!confermato}>Invia</button>
            </h1>
            <slot />
        </article>
    </section>
    <footer>
    <h4>Copyright &copy; Antonio Mancuso</h4>
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

.giallo{
    border: 5px solid yellow;
    width: 300px;
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
</style>