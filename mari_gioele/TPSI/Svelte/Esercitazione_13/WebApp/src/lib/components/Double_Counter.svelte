<svelte:head>
    <link href="https://fonts.googleapis.com/css2?
    family=Material+Symbols+Outlined:opsz, wght, FILL, GRAD@48,400,0,0" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Bungee+Spice&display=swap"
    rel="stylesheet">
</svelte:head>

<script>
    import Counter from "./counter.svelte";

    export let cont2 = 0;
    function counter_incr()  {cont2 += 2;}
    function counter_decr()  {cont2 -= 3;}
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
            <h1>Il contatore ha il valore: {cont2}</h1>
            <div class="container">
                <div class="pulsante">
                    <button on:click={counter_decr}><span class="material-symbols-outlined icon">-</span></button>
                </div>
                <div class="number">
                    {cont2}
                </div>
                <div class="pulsante">
                    <button on:click={counter_incr}><span class="material-symbols-outlined icon">+</span></button>
                </div>
            </div>
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
    font-size: 2.5rem;
    color: #F09C00;
    font-weight: bolder;
}
.icon {
font-size: 2.5rem;
color: #F09C00; font-weight: bolder;
}
.icon:hover {
color: #D43C2F;
cursor: pointer;
}
.icon:active {
text-shadow: 1px 1px 10px #D43C2F;
}
.number {
font-size: 4rem;
font-family: 'Bungee Spice', cursive;
}
.giallo{border: 5px solid yellow;}
</style>