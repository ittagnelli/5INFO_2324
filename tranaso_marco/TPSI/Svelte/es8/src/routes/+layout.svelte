<main>
    <header>
        <h1>Web App</h1>
    </header>

    <section>
        <nav>
            <ul>
                <li><a href="#">Chi sono</a></li>
                <li><a href="#">Counter</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <article>
            <p>Welcome to my WebApp</p>   
</article>
    </section>
<footer><h4>Copyright &copy;Marco Tranaso</h4></footer>
</main>
<style>

:global(body) {
        margin: 0;
    }
p{
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    line-height: 500px;
}

    nav {
        background-color: #0077b6;
        flex: 1;
    }

    nav ul {
        list-style: none;
    }
    main {
        text-align: left;
        display: flex;
        flex-direction: column;
        height: 100vh;
        color: white;
    }
    nav ul li {
        padding-bottom: 100px;
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

    header{
        background-color: blue;
        text-align: center;
    
    }

    footer {
        background-color: #03045e;
        text-align: center;
        font-size: 20px;
        flex: 1;
    }
    section
    {
        display: flex;
        flex: 10;
    }
    footer{
        background-color: purple;
        text-align: center;
        font-size: 20px;
        flex: 1;
        }
</style>