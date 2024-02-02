<script>
    export let nome = "Alessandro";
    export let cognome = "Scattaglia";
    export let età = 17;
    let src =
        "https://lh3.googleusercontent.com/qqbcSwJ2DOf7gFueSX16oLuzEIwqWpRHALA2ReXaEt1npxZ_LzZQtuW5ck4SUl-iODUuEtmpXszuQmLTx6Naceublg5iLv9OKy02";
    export let larghezza = "30%";
</script>

<main>
    <h1>
        Ciao sono {nome}
        {cognome}, ho {età} anni e frequento la 5 superiore alla scuola Istituto
        tecnico Edoardo agnelli sezione informatica.
    </h1>
    <h4>
        Pratico Atletica leggera da quando ho iniziato la terza superiore e mi
        piace molto.
    </h4>
    <img class="img1" {src} width={larghezza} alt="Alessandro_Scattaglia" />
</main>

<style>
    h1 {
        font-size: x-large;
    }
    h4 {
        font-size: large;
    }
    .img1 {
        border-radius: 100%;
    }
</style>
