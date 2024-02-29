<main> 
    <header>
        <h1>web app</h1>
    </header>

    <section>
        <nav>
            <ul>
                <li><a href='/chi_sono'> chi sono </a></li>
                <li><a href='#'> counter </a></li>
                <li><a href='#'> about </a></li>
            </ul>
        </nav>

        <article>
            
            <p><b> WELCOME to my WebApp</b></p>
            
        </article>

    </section>
    <footer>
        <h4> copyright &copy: emanuele farfariello</h4>
    </footer>
</main>


<style>
    :global(body){
        margin: 0;
    }
    main{
        display: flex;
        height: 100vh;
        flex-direction: column;
        box-sizing: border-box;
        color: white;
    }
    header{
        background-color: #023E8A;
        text-align: center;
    }
    section{
        display: flex;
        flex-direction: row;
        flex: 10;
    }
    nav{
        background-color: #0077B6;
        flex: 1;
    }
    nav ul{
        list-style: none;
    }
    nav ul li{
        padding: 10px;
    }
    nav ul li a{
        color: white;
        text-decoration: none;
        font-size: 30px;
        font-weight: bolder;
    }
    article{
        color: #03045E;
        padding : 60px;
        margin-top: 28vh;
        text-align: center;
        font-size: 70px;
        flex: 8;
        
    }
    footer{
        background-color: #03045E;
        text-align: center;
        font-size: 20px;
        flex: 1;
    }

</style>
