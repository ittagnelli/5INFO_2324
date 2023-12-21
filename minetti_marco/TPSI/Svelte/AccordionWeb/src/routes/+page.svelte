<script>
    import Accordion from "../components/accordion.svelte";

    export let title1 = "Che cosa è l'HTML";
    export let text1 = "Per capire HTML e tutti i suoi aspetti, bisogna rispondere a delle domande: cos'è HTML? Come funziona HTML? Come è stato pensato e come si è evoluto nel tempo? Ma anche come lo si può imparare, e quali sono le sue caratteristiche che lo rendono un linguaggio da conoscere ancora oggi, a trent'anni dalla sua nascita?";
    export let title2 = "Che cosa è il CSS";
    export let text2  = "La sigla CSS sta per Cascading Style Sheets, in italiano fogli di stile. Essenzialmente, il CSS è un linguaggio che gestisce il design e la presentazione delle pagine web (cioè l’aspetto estetico) e lavora in combinazione con l’HTML, o HyperText Markup Language (linguaggio a marcatori per ipertesti, il quale invece gestisce i contenuti delle pagine.";
    export let title3 = "Che cosa è il JS";
    export let text3 = "JavaScript è un linguaggio di programmazione che gli sviluppatori utilizzano per realizzare pagine Web interattive. Le funzioni di JavaScript possono migliorare l'esperienza utente nel sito Web: dall'aggiornamento dei feed dei social media fino alla visualizzazione di animazioni e mappe interattive. Trattandosi di un linguaggio di scripting lato client, è una delle tecnologie principali del World Wide Web."
    
</script>

<Accordion first Title = {title1} Text = {text1}/>
<Accordion Title = {title2} Text = {text2}/>
<Accordion Title = {title3} Text = {text3}/>