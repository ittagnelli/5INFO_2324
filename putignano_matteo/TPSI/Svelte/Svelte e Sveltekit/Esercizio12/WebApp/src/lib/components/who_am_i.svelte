<script>
    export let nome = "Mario";
    export let cognome = "Rossi";
    export let eta = "20";
    let src = 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png';
    export let width = "20%";
</script>


<h1>Ciao io sono {nome} {cognome} e ho {eta} anni</h1>
<h4>Sono uno studente di informatica presso l'istituto internazionale Edoardo Agnelli di Torino</h4>

<img id = img1 {src} alt = "image not found" {width}>

<style>
    #img1{
        border-radius: 50%;
        border: 1px solid black;
    }
</style>