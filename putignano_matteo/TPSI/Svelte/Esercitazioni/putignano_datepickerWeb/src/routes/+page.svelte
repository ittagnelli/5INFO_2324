<script>
    import DataPiker from "../components/DatePicker.svelte";
    let gg,mm,aaaa;
</script>

<main>
    <h1>L'utente ha selezionato {gg} - {mm} - {aaaa}</h1>
    <br><br>
    <div class="H">
        <DataPiker bind:GG={gg} bind:MM={mm} bind:AAAA={aaaa}/>
    </div>
</main>

<style>
    .H{
        width: 40%;
        margin: auto;
    }
    h1{
        width: 40%;
        margin: auto;
    }
</style>