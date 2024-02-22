<script>
    export let nome;
    export let cognome;
    export let eta;
</script>

<main>
    <div>
        <article>
            <slot />
        </article>
    </div>
    <h1>Ciao sono {nome} {cognome} e ho {eta} anni</h1>
    <h4>Sono uno studente di informatica presso l'istituto Edoardo Agnelli</h4>
</main>

<style>
</style>