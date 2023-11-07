<script>
    import DatePicker from "../lib/components/DatePicker.svelte";
    let giorno = 'GG';
    let mese = 'MM';
    let anno = 'AAAA';
    let confermato = false;
</script>

<h1>L'utente ha selezionato {giorno} - {mese} - {anno}</h1>
<br><br>

<DatePicker bind:data={giorno}>
<DatePicker bind:data={mese}>
<DatePicker bind:data={anno}>
<button disabled={!confermato}>Select</button>

<style>
    h1 {
        text-align: center;
        padding-top: 15%;
    }
</style>