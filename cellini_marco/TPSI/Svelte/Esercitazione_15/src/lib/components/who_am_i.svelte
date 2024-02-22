<script>
    export let name;
    export let surname;
    export let age;
    export let src;
    export let width;
</script>

<section>
    <h1>Ciao io sono {name} {surname} ed ho {age} Anni</h1>
    <h4>
        Sono uno studente di informatoca presso l'istituto Agnelli di Torino
    </h4>
    <img {src} width={width}>     <!-- oppure <img src={url}> -->
    <!-- possiamo sia mettere url o mette direttamente src ma anche export deve chiamarsi src -->
</section>

<style>
    section {
        margin: 10px;
        border: 3px solid greenyellow;
    }
</style>
