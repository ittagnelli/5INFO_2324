<script>
    import Whoami from "../../lib/components/whoami.svelte";
</script>

<main>
    <header>
        <h1>Web App</h1>
    </header>
    <section>
        <nav>
        <ul>
            <li class="chisono_giallo"><a href="../">Home</a></li>
        </ul>
        </nav>
        <article>
            <div class="chisono_blu">
            <div class="whoami"><Whoami nome="Gioele" cognome="Mari" eta=18/></div>
            </div>
            <slot />
        </article>
    </section>
    <footer>
        <h4>Copyright &copy; Antonio Mancuso</h4>
    </footer>
    </main>

<style>
    :global(body) {
        margin: 0;
    }
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

.whoami{
    border: 5px solid lime;
    margin: 10px;
}

.chisono_blu{
    border: 5px solid blue;
    width: 50%;
    height: 600px;
}

.chisono_giallo{
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