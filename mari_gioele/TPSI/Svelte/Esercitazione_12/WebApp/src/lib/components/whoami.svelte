<script>
    export let nome="Gioele";
    export let cognome="Mari";
    export let eta=18;
</script>

<main>
    <div>
        <article>
            <slot />
        </article>
    </div>
    <h1>Ciao sono {nome} {cognome} e ho {eta} anni</h1>
    <h4>Sono uno studente di informatica presso l'istituto Edoardo Agnelli</h4>
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