<script>
    export let nome="Marco";
    export let cognome="Tranaso";
    export let eta=17;
    export let larghezza="20%";
    let url="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBJwU9Mt2hikm1Si2uba87H7ECY51yZHIv6SBPEOyBxWK1q6gj";
</script>

<h1>Ciao io sono {nome} {cognome} e ho {eta} anni</h1>
<h4>Sono uno studente di informatica presso l'Istituto Agnelli</h4>

<img class="img1" src={url} width={larghezza} alt="trana">

<style>
    .img1{
        border-radius: 100%;
    }

</style>
