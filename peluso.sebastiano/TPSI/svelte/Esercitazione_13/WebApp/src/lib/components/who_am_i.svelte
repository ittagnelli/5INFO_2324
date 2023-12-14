
<script>
    export let nome = "Sebastiano";
    export let cognome = "Peluso";
    export let età = 18;
    export let città = "Torino";
    let larghezza = "300px";
    let altezza = "300px";
    import avatar from '$lib/images/avatar.jpg';
    
</script>

<h1>Ciao, io sono {nome} {cognome} ed ho {età} anni</h1>
<h4>Sono uno studente della 5 INFORMATICA dell'istituto internazionale Edoardo Agnelli di {città}</h4>

<img class="foto" src={avatar}  alt="avatar" width="{larghezza}" height="{altezza}">



 <style>
    .foto{
        border-radius: 80%;
        
    }
 </style>