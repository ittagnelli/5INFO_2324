<script>
    export let nome = "Marco";    
    export let cognome = "Minetti";   
    export let eta = 17;
    export let src = "https://cdn-icons-png.flaticon.com/512/6300/6300548.png";
    export let width = "10%";
</script>

<div>
    <h1> Ciao sono {nome} {cognome} ed ho {eta} anni</h1>
    <h4> Sono uno studente di informatica presso l'istituto Edoardo Agnelli a Torino </h4>

    <img {src} alt="Minetts" {width}>
</div>

<style>

    div {
        width: 80%;
        border: 3px solid lightblue;
        padding: 10px;
        margin: 5px;
    }
</style>