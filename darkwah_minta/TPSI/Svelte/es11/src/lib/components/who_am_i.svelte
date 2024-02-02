<script>
    export let nome = "Oheneba Minta";
    export let cognome = "Darkwah";
    export let eta = 18;
    export let url = 'https://cdn.icon-icons.com/icons2/10/PNG/256/user_person_customer_man_1532.png';
</script>

<div>
    <h1>Ciao io sono {nome} {cognome} ed ho {eta} Anni</h1>
    <h4>Sono un studente di informatica presso l'istituto Agnelli a Torino</h4>

    <img src={url} alt="mintadarkwah">
</div>


<style>
    div
    {
        margin-top: -10rem;
    }
    h1
    {
        font-size: 3rem;
        text-align: left;
    }
    h4
    {
        font-size: 2rem;
        
        text-align: left;
    }

    img
    {
        width: 20%;
    }
</style>