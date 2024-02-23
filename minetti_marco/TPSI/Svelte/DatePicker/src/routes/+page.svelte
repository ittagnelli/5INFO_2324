<script>
    import Date from "../components/Date.svelte";

    let g, m, a;
</script>


<main>
    <div>
        <h1>L'utente ha selezionato {g}-{m}-{a}</h1> 
    </div>
    <Date bind:G = {g} bind:M = {m} bind:A = {a}/>
</main>

<style>
    div{
        width: 30%;
        margin: 0 auto;
    }
</style>
