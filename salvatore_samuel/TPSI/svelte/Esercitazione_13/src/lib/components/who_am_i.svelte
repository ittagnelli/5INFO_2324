<script>
    export let nome = "Samuel";
    export let cognome = "Salvatore";
    export let eta = 17;
    export let larghezza= "350px";
    export let altezza= "350px";
    let url = "https://cdn.vrcmods.com/uploads/items/item/84/imgs/7a0ea170534a4cee89b80808b38687da.jpg";
</script>

<h1>Ciao io sono {nome} {cognome} eh ho {eta} anni</h1>
<h4>Sono un pagliaccio presso tutto il mondo</h4>

<img src="{url}" alt="io" width={larghezza} height={altezza}>

<style>
    img {
        border-radius: 100%;
        border: 1px solid black;
    }
</style>